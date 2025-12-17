import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname, relative } from 'path';
import { existsSync, mkdirSync } from 'fs';

const ASSETS_DIR = join(process.cwd(), 'src', 'assets');
const OUTPUT_DIR = join(process.cwd(), 'dist', 'heyimgarret', 'assets');

interface ImageFile {
  inputPath: string;
  relativePath: string;
}

// Recursively find all image files
async function findImages(
  dir: string,
  baseDir: string = dir
): Promise<ImageFile[]> {
  const files: ImageFile[] = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively search subdirectories
        const subFiles = await findImages(fullPath, baseDir);
        files.push(...subFiles);
      } else if (entry.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
        // Get relative path from base directory
        const relativePath = relative(baseDir, fullPath);
        files.push({
          inputPath: fullPath,
          relativePath: relativePath,
        });
      }
    }
  } catch (error: any) {
    // Directory might not exist or be accessible, skip it
    if (error.code !== 'ENOENT') {
      console.warn(`Warning: Could not read directory ${dir}:`, error.message);
    }
  }

  return files;
}

async function compressImages(): Promise<void> {
  try {
    // Check if source directory exists
    if (!existsSync(ASSETS_DIR)) {
      console.log(`Assets directory not found: ${ASSETS_DIR}`);
      console.log('Skipping image compression.');
      return;
    }

    // Find all images recursively
    const imageFiles = await findImages(ASSETS_DIR);

    if (imageFiles.length === 0) {
      console.log('No images found to compress.');
      return;
    }

    console.log(`Found ${imageFiles.length} images to compress...\n`);

    let totalOriginalSize = 0;
    let totalCompressedSize = 0;
    let processedCount = 0;
    let skippedCount = 0;

    for (const { inputPath, relativePath } of imageFiles) {
      const outputPath = join(OUTPUT_DIR, relativePath);
      const outputDir = dirname(outputPath);

      try {
        // Create output directory if it doesn't exist
        if (!existsSync(outputDir)) {
          mkdirSync(outputDir, { recursive: true });
        }

        const stats = await stat(inputPath);
        totalOriginalSize += stats.size;

        // Determine output format based on input
        const ext = inputPath.toLowerCase().split('.').pop();
        const isPng = ext === 'png';
        const isWebp = ext === 'webp';

        let sharpInstance = sharp(inputPath)
          .rotate() // Auto-rotate based on EXIF orientation and remove orientation tag
          .resize(1200, null, {
            withoutEnlargement: true,
            fit: 'inside',
          });

        // Preserve format or convert to appropriate format
        if (isPng) {
          sharpInstance = sharpInstance.png({
            quality: 85,
            compressionLevel: 9,
          });
        } else if (isWebp) {
          sharpInstance = sharpInstance.webp({ quality: 85 });
        } else {
          // JPEG for jpg/jpeg
          sharpInstance = sharpInstance.jpeg({ quality: 85, mozjpeg: true });
        }

        await sharpInstance.toFile(outputPath);

        const compressedStats = await stat(outputPath);
        totalCompressedSize += compressedStats.size;
        processedCount++;

        const reduction = (
          (1 - compressedStats.size / stats.size) *
          100
        ).toFixed(1);
        console.log(
          `✓ ${relativePath}: ${(stats.size / 1024 / 1024).toFixed(2)}MB → ${(
            compressedStats.size /
            1024 /
            1024
          ).toFixed(2)}MB (${reduction}% reduction)`
        );
      } catch (error: any) {
        skippedCount++;
        console.error(`✗ Error processing ${relativePath}:`, error.message);
      }
    }

    if (processedCount > 0) {
      const totalReduction = (
        (1 - totalCompressedSize / totalOriginalSize) *
        100
      ).toFixed(1);
      console.log(`\nCompression complete!`);
      console.log(
        `Processed: ${processedCount} images, Skipped: ${skippedCount} images`
      );
      console.log(
        `Total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(
          totalCompressedSize /
          1024 /
          1024
        ).toFixed(2)}MB (${totalReduction}% reduction)`
      );
    } else {
      console.log('\nNo images were successfully compressed.');
    }
  } catch (error) {
    console.error('Error compressing images:', error);
    process.exit(1);
  }
}

compressImages();

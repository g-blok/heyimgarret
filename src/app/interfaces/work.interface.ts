export interface WORK {
    company: string;
    displayName: string;
    jobTitle: string;
    startDate:  string;
    endDate:  string;
    selected: boolean;
    overview?: string;
    achievements?: string[];
    technologies?: string[];
    links?: WORK_LINKS[];
}

export interface WORK_LINKS {
    display: string;
    url: string;
}
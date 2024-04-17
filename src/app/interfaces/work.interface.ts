export interface WORK {
    company: string;
    displayName: string;
    jobTitle: string;
    softwareBased: boolean;
    startDate:  string;
    endDate:  string;
    selected: boolean;
    overview?: string;
    achievements?: string[];
    technologies?: string[];
    description?: WORK_DESCRIPTION[]
}

export interface WORK_DESCRIPTION {
    task: string;
    details: string[];
}
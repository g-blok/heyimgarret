export interface WORK {
    company: string;
    displayName: string;
    jobTitle: string;
    startDate:  string;
    endDate:  string;
    selected: boolean;
    description: WORK_DESCRIPTION[]
}

export interface WORK_DESCRIPTION {
    task: string;
    details: string[];
}
export interface Data {
    ip: string;
    status: number;
    userId: number;
    timestamp: number;
    sessionKey: string;
}

export interface CategoryDto {
    id: string;
    sysActionId: number;
    actionId: number;
    categoryId?: any;
    instanceId?: any;
    operationType: number;
    data: Data;
    isPatch: boolean;
    userId: number;
    modifiedDate: string;
    context?: any;
}

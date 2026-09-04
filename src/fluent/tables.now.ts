import { Table, StringColumn, BooleanColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_snc_maintenance_system = Table({
    name: 'x_snc_maintenance_system',
    label: 'System',
    display: 'name',
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true }),
        description: StringColumn({ label: 'Description', maxLength: 500 }),
        active: BooleanColumn({ label: 'Active', default: true }),
        owner: ReferenceColumn({ label: 'Owner', referenceTable: 'sys_user' }),
        category: ChoiceColumn({
            label: 'Category',
            choices: {
                infrastructure: 'Infrastructure',
                application: 'Application',
                network: 'Network',
                database: 'Database',
            },
        }),
    },
})

export const x_snc_maintenance_stakeholder = Table({
    name: 'x_snc_maintenance_stakeholder',
    label: 'System Stakeholder',
    schema: {
        system: ReferenceColumn({ label: 'System', referenceTable: 'x_snc_maintenance_system', mandatory: true }),
        user: ReferenceColumn({ label: 'User', referenceTable: 'sys_user', mandatory: true }),
        stakeholder_role: ChoiceColumn({
            label: 'Stakeholder Role',
            choices: {
                owner: 'Owner',
                developer: 'Developer',
                operator: 'Operator',
            },
        }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
})

export const x_snc_maintenance_request = Table({
    name: 'x_snc_maintenance_request',
    label: 'Maintenance Request',
    extends: 'task',
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'MREQ',
        number: 1000,
        numberOfDigits: 7,
    },
    schema: {
        system: ReferenceColumn({
            label: 'System',
            referenceTable: 'x_snc_maintenance_system',
            mandatory: true,
            useReferenceQualifier: 'simple',
            referenceQual: 'active=true',
        }),
        maintenance_type: ChoiceColumn({
            label: 'Maintenance Type',
            choices: {
                emergency: 'Emergency',
                planned: 'Planned',
                preventive: 'Preventive',
            },
        }),
        requested_by: ReferenceColumn({
            label: 'Requested By',
            referenceTable: 'sys_user',
        }),
        modification_details: StringColumn({
            label: 'Modification Details',
            maxLength: 4000,
        }),
    },
})

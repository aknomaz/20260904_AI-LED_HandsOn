import { Role } from '@servicenow/sdk/core'

export const requesterRole = Role({
    name: 'x_snc_maintenance.requester',
    description: 'Can create and view maintenance requests',
})

export const maintainerRole = Role({
    name: 'x_snc_maintenance.maintainer',
    description: 'Can view request details, update modification content, request approval',
})

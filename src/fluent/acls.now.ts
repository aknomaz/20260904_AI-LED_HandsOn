import { Acl } from '@servicenow/sdk/core'
import { requesterRole, maintainerRole } from './roles.now'

// ACLs for x_snc_maintenance_request
Acl({
    $id: Now.ID['request-create-acl'],
    type: 'record',
    table: 'x_snc_maintenance_request',
    operation: 'create',
    roles: [requesterRole],
    adminOverrides: true,
})

Acl({
    $id: Now.ID['request-read-acl'],
    type: 'record',
    table: 'x_snc_maintenance_request',
    operation: 'read',
    roles: [requesterRole, maintainerRole],
    adminOverrides: true,
})

Acl({
    $id: Now.ID['request-write-acl'],
    type: 'record',
    table: 'x_snc_maintenance_request',
    operation: 'write',
    roles: [maintainerRole],
    adminOverrides: true,
})

// ACLs for x_snc_maintenance_system
Acl({
    $id: Now.ID['system-read-acl'],
    type: 'record',
    table: 'x_snc_maintenance_system',
    operation: 'read',
    roles: [requesterRole, maintainerRole],
    adminOverrides: true,
})

// ACLs for x_snc_maintenance_stakeholder
Acl({
    $id: Now.ID['stakeholder-read-acl'],
    type: 'record',
    table: 'x_snc_maintenance_stakeholder',
    operation: 'read',
    roles: [requesterRole, maintainerRole],
    adminOverrides: true,
})

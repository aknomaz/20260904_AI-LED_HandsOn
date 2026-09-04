import { BusinessRule } from '@servicenow/sdk/core'
import { setRequestDefaults } from '../server/business-rules/set-request-defaults'

BusinessRule({
    $id: Now.ID['set-request-defaults'],
    name: 'Set Defaults on Maintenance Request',
    table: 'x_snc_maintenance_request',
    when: 'before',
    action: ['insert'],
    order: 100,
    script: setRequestDefaults,
})

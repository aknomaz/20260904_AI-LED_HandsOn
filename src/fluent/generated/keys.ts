import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'd8f99fb9f12044f690e16bfca18aef0d'
                    }
                    'default-maintenance-assignment': {
                        table: 'sysrule_assignment'
                        id: 'be2a0c344a7f4338a37330a2f090075e'
                    }
                    insert_active_system: {
                        table: 'sys_atf_step'
                        id: 'd5d7201530cd4804bc207420b252533e'
                    }
                    insert_inactive_system: {
                        table: 'sys_atf_step'
                        id: '6758cf9fa39342bc8a12f02d303826a3'
                    }
                    insert_request_active: {
                        table: 'sys_atf_step'
                        id: 'ea46360289bd4464bcbeb6e05f1d6a96'
                    }
                    insert_request_inactive: {
                        table: 'sys_atf_step'
                        id: '6f06d8acab8842ae99e71e84e03df067'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'b599712fe7c243a2aab74b7a14626254'
                    }
                    'request-create-acl': {
                        table: 'sys_security_acl'
                        id: 'a73d440b519942b683fc32d0f7896b4e'
                    }
                    'request-read-acl': {
                        table: 'sys_security_acl'
                        id: 'b894a49d51e042219f01a4ff1b0c46e3'
                    }
                    'request-write-acl': {
                        table: 'sys_security_acl'
                        id: 'f7ab6a311f2c4e70b2b61d5f58cdd155'
                    }
                    'set-request-defaults': {
                        table: 'sys_script'
                        id: 'ea4f4bb38a0c4e919ff4a0740b513dbb'
                    }
                    'src_server_business-rules_set-request-defaults_ts': {
                        table: 'sys_module'
                        id: '7f31912a3a404603ab82ceddb5f1713d'
                    }
                    'stakeholder-read-acl': {
                        table: 'sys_security_acl'
                        id: '8b1a1d37fb0b45c58a1674f5b42a08f6'
                    }
                    'system-read-acl': {
                        table: 'sys_security_acl'
                        id: 'd2c5cc8e01104882859f21bf6b844d86'
                    }
                    test_active_system_request: {
                        table: 'sys_atf_test'
                        id: 'f5b0c57cc05d4b45b85d891567df5ad8'
                    }
                    test_inactive_system_request: {
                        table: 'sys_atf_test'
                        id: '17136b29942e4432af87eef176d2edcb'
                    }
                    validate_request_defaults: {
                        table: 'sys_atf_step'
                        id: '7be3720ad3c8485f9d7780e01d6feef5'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0061b84a882b4a80a54c4403d95782bf'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0ea588f31ad64fceb241eb98930c3de1'
                        key: {
                            document_key: '6f06d8acab8842ae99e71e84e03df067'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1481c0e57c7d4b5588af44942f084af3'
                        key: {
                            name: 'x_snc_maintenance_system'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '15ffc9741146499fbbd4a03af5ac95cd'
                        key: {
                            sys_security_acl: '8b1a1d37fb0b45c58a1674f5b42a08f6'
                            sys_user_role: {
                                id: '1aa9080553c54316a36c70979e21a9f4'
                                key: {
                                    name: 'x_snc_maintenance.maintainer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1aa9080553c54316a36c70979e21a9f4'
                        key: {
                            name: 'x_snc_maintenance.maintainer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b395b70d7bb43c89d32b09b644fbe5e'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d4c46a22bd84e778b196be5c857cf6a'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'category'
                            value: 'application'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2e34d42eeb4945fe8dac0a877d81bad5'
                        key: {
                            document_key: 'ea46360289bd4464bcbeb6e05f1d6a96'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '31d8d534a71542f898bdf014286c8b37'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'stakeholder_role'
                            value: 'owner'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3485e5625d294f759bf436f0e83de00f'
                        key: {
                            document_key: 'ea46360289bd4464bcbeb6e05f1d6a96'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '394873646d22418b94c97328985758e1'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'category'
                            value: 'infrastructure'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a1392e812ec4e58ae9e3115f0da0ef8'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4482d425efd2447ab42a71a8e813e3a9'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'modification_details'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '463240aa240c4636ab72fbd8b562f607'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a9781669e0f4aa8b305f8eb864e0c1e'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'category'
                            value: 'network'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '520ea4f444cc49afba92bb988731c638'
                        key: {
                            field: 'field_values'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            id: '6f06d8acab8842ae99e71e84e03df067'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53da3390969a47ceaf190c5da58231bd'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5419e174497a42179010897f4835e680'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'stakeholder_role'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '55abf3a33d0743669037c132163e456b'
                        key: {
                            document_key: 'ea46360289bd4464bcbeb6e05f1d6a96'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '56448dedb5ab49a2a62f42721895dd37'
                        key: {
                            document_key: '7be3720ad3c8485f9d7780e01d6feef5'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '576d8601e77b4a8596f29c0d79ea2eea'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5aea007aa5074bc09a8d2f4f9c5f1a99'
                        key: {
                            document_key: '6758cf9fa39342bc8a12f02d303826a3'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ca41eba963347ba800ecbe47a19291b'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5ffb83b7f64342d8b1aff3887288e32f'
                        key: {
                            document_key: '7be3720ad3c8485f9d7780e01d6feef5'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62877c1b09814352908d48f476307fe0'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '63364e07fae24ab09129cc74008abba2'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'stakeholder_role'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66c5a1a307c844938b1c26d20db07505'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '679de8e9837946e6852cd57075a615e7'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'name'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '67baa9a6f3844ad3b8bc03925230881a'
                        key: {
                            name: 'x_snc_maintenance_system'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6825b8c9dc7f4a5f8be4b3f63a99acf2'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'system'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '68f90fe781ef4dbc88a947e21e039097'
                        key: {
                            document_key: 'd5d7201530cd4804bc207420b252533e'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6979ea5a0fdf423c911b962c5b77b1a3'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'maintenance_type'
                            value: 'planned'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70605c541d054891b37fea390edb6a48'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '712920c96f8c429eb8e8437ad18dc0ba'
                        key: {
                            sys_security_acl: 'a73d440b519942b683fc32d0f7896b4e'
                            sys_user_role: {
                                id: 'ea3093bc773142eaa09de47a0159d9fd'
                                key: {
                                    name: 'x_snc_maintenance.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '71962bc12e654642a54659f6ef324164'
                        key: {
                            field: 'record_id'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            id: '7be3720ad3c8485f9d7780e01d6feef5'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '737a663cbfae4b3fb298044335ca7590'
                        key: {
                            sys_security_acl: '8b1a1d37fb0b45c58a1674f5b42a08f6'
                            sys_user_role: {
                                id: 'ea3093bc773142eaa09de47a0159d9fd'
                                key: {
                                    name: 'x_snc_maintenance.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '73fbcf27bdf24d5e8899c95d5359904c'
                        key: {
                            document_key: '6f06d8acab8842ae99e71e84e03df067'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '769362a430e347b3abba0a7afb048cef'
                        key: {
                            sys_security_acl: 'b894a49d51e042219f01a4ff1b0c46e3'
                            sys_user_role: {
                                id: 'ea3093bc773142eaa09de47a0159d9fd'
                                key: {
                                    name: 'x_snc_maintenance.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b68e85f1c4a4b27826d8d8db7e5fd30'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7f0528c37f784975acfc564d7f8cb6b4'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80172fb694d24172a00b07304f9cc863'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '810678d46e01492291995e4648220041'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83ad7722bd044a3fa210971562d234b8'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8725ba4076c44eb9bbcff251a4736725'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8a689f30a91846f0a4ea7c69e18b6e08'
                        key: {
                            document_key: '6758cf9fa39342bc8a12f02d303826a3'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8efd7f19e17a4155a72878e3b6b2ea27'
                        key: {
                            document_key: 'd5d7201530cd4804bc207420b252533e'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '93268cae319e43169ae234d256ca62e6'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94af7658ea054ddaacd4992a34995558'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '97a4ce2e2e9f43a19d029aaf3e742b3a'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '9afdd731ba5a47cd99c4f92333f06680'
                        key: {
                            category: 'x_snc_maintenance_request'
                            prefix: 'MREQ'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e098c95b97348629c46a74c9efd9ab8'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1683c44e9194b55824f297e8c990a62'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a1b9ee5942ef452d8392e434fbffe9bc'
                        key: {
                            sys_security_acl: 'f7ab6a311f2c4e70b2b61d5f58cdd155'
                            sys_user_role: {
                                id: '1aa9080553c54316a36c70979e21a9f4'
                                key: {
                                    name: 'x_snc_maintenance.maintainer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a60b6c80863f4f70aaf662e4f18b123e'
                        key: {
                            document_key: '6758cf9fa39342bc8a12f02d303826a3'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aa0687bb1f804d848b86d23bbb233bc9'
                        key: {
                            document_key: 'ea46360289bd4464bcbeb6e05f1d6a96'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ac318df0e8914794968fb1d457a9814a'
                        key: {
                            name: 'x_snc_maintenance_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'adbce4d80e1e45f3bbccabe4725bb77b'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'stakeholder_role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aee7fdffe5de41e19bdbac8214193a3e'
                        key: {
                            document_key: 'd5d7201530cd4804bc207420b252533e'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b3a5b9a0cdd7419cbe67953725ef6bbb'
                        key: {
                            document_key: '7be3720ad3c8485f9d7780e01d6feef5'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b563d8710ba3472e883254510aa36c00'
                        key: {
                            sys_security_acl: 'b894a49d51e042219f01a4ff1b0c46e3'
                            sys_user_role: {
                                id: '1aa9080553c54316a36c70979e21a9f4'
                                key: {
                                    name: 'x_snc_maintenance.maintainer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b5f906f9ee6f4685b98791b3a389a955'
                        key: {
                            document_key: '7be3720ad3c8485f9d7780e01d6feef5'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd73569c1fbe4bf09c5e2e4c6c417063'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c1c507436d7d4c76be8eed465046d0d7'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'category'
                            value: 'database'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c4ac460f823048558d9d1d095f0ead69'
                        key: {
                            sys_security_acl: 'd2c5cc8e01104882859f21bf6b844d86'
                            sys_user_role: {
                                id: '1aa9080553c54316a36c70979e21a9f4'
                                key: {
                                    name: 'x_snc_maintenance.maintainer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c73419b9da824341aacb52957bd8f1a0'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c756665d047048db88577f827e0b12a0'
                        key: {
                            document_key: '7be3720ad3c8485f9d7780e01d6feef5'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c8a63c92fd2e4ce2b8928c75ad744fe6'
                        key: {
                            sys_security_acl: 'd2c5cc8e01104882859f21bf6b844d86'
                            sys_user_role: {
                                id: 'ea3093bc773142eaa09de47a0159d9fd'
                                key: {
                                    name: 'x_snc_maintenance.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cc41893d2d024deea378e064e0aac45a'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'stakeholder_role'
                            value: 'operator'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd150cde949e44c1788982ad6325b17df'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd1f79c0c4bbd425a8261054d4453feea'
                        key: {
                            document_key: 'd5d7201530cd4804bc207420b252533e'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd51efcf52ede48b6a72022438504acd3'
                        key: {
                            name: 'x_snc_maintenance_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dbcee11595f9484b99860a1eb5db00de'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'maintenance_type'
                            value: 'emergency'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ddb5d8f74b1f4c7e8582abadaa895770'
                        key: {
                            document_key: '6f06d8acab8842ae99e71e84e03df067'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e48c3166b5434891ad05b0503680423c'
                        key: {
                            document_key: '6f06d8acab8842ae99e71e84e03df067'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e573eba32e07479db5ddec5e8f9d7033'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'stakeholder_role'
                            value: 'developer'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e837c44c1176484d82811e848a8ad296'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'maintenance_type'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ea3093bc773142eaa09de47a0159d9fd'
                        key: {
                            name: 'x_snc_maintenance.requester'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb6a461471eb42b0bfa39638b99d09b9'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f06e169419e54984be58b924cacc53bb'
                        key: {
                            name: 'x_snc_maintenance_stakeholder'
                            element: 'system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0f04211c8014e439e3cbf1471fb3dca'
                        key: {
                            name: 'x_snc_maintenance_system'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f119ead6a95e4dab87c79dc1b45b78d4'
                        key: {
                            field: 'field_values'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            id: 'ea46360289bd4464bcbeb6e05f1d6a96'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1591b4cd7cc40cbbe179486c7ffb103'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'modification_details'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4bea8c450cb495e9944ed8f8cf51645'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'maintenance_type'
                            value: 'preventive'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f8f0bf024c054125bd86ac077dd94fcf'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'maintenance_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa48c03f952b4a20b876495d0206060f'
                        key: {
                            name: 'x_snc_maintenance_request'
                            element: 'maintenance_type'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ffa62528f7fd42d4a3700a7fbc5affde'
                        key: {
                            document_key: '6758cf9fa39342bc8a12f02d303826a3'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                ]
            }
        }
    }
}

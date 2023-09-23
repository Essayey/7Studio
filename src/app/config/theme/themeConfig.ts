import { extendTheme, createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { accordionAnatomy } from '@chakra-ui/anatomy'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys)

const accordionBaseStyle = definePartsStyle({
    container: {
        border: 'none'
    },
    button: {
        color: '#A1A1AA',
        borderBottom: '1px solid #414144',
        height: '44px'
    }
})

const accordionTheme = defineMultiStyleConfig({ baseStyle: accordionBaseStyle })

export const theme = extendTheme({
    fonts: {
        body: 'Roboto, sans-serif'
    },
    colors: {
        brand: {
            bgNavPanel: '#27272A',
            secondaryText: '#A1A1AA',
            secondaryTextHover: '#FFFFFF',
            primaryText: '#FFFFFF',
            bgPage: '#202124',
            border: '#414144'
        }
    },
    components: {
        Accordion: accordionTheme,
        Link: {
            baseStyle: {
                _hover: {
                    textDecoration: 'none'
                }
            }
        },
        Text: {
            sizes: {
                xs: {
                    h: '12px',
                    fontSize: 'xs',
                    px: '10px'
                },
                sm: {
                    h: '16px',
                    fontSize: 'sm',
                    px: '14px'
                },
                md: {
                    h: '21px',
                    fontSize: 'md',
                    px: '18px'
                }
            }
        },
        Table: {
            variants: {
                simple: {
                    th: {
                        borderColor: '#414144'
                    },
                    td: {
                        borderColor: '#414144'
                    }
                }
            }
        },
        Input: {
            variants: {
                text: {
                    field: {
                        color: '#71717A',
                        background: 'transparent',
                        border: '1px solid #414144',
                        borderRadius: '6px'
                    }
                }
            }
        }
    },

    styles: {
        global: {
            body: {
                fontWeight: 400,
                bg: 'brand.bgPage',
                color: 'brand.primaryText'
            }
        }
    }
})

import {
    Box,
    Typography,
    Grid,
    Card,
    Stack,
    Container,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionGroup
} from "@mui/joy";
import AddIcon from '@mui/icons-material/Add';
import ContactForm from "@/components/forms/contact-form";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const glassStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "30px",
};

const faqs = [
    {
        q: "¿Cuánto tiempo tardan en verse los resultados?",
        a: "Dependiendo del servicio, las optimizaciones estratégicas muestran cambios en los primeros 15-30 días. Para estrategias de escalado completo, el periodo de maduración es de 3 meses."
    },
    {
        q: "¿Trabajan con empresas de cualquier tamaño?",
        a: "Nos especializamos en PyMEs y empresas en etapa de crecimiento (Scale-ups) que ya tienen un producto validado y buscan profesionalizar su adquisición de clientes."
    },
    {
        q: "¿Los servicios son mensuales o por proyecto?",
        a: "Ofrecemos ambas modalidades. Proyectos definidos para diagnósticos y lanzamientos, e igualas mensuales para el acompañamiento estratégico y gestión de performance."
    }
];

export default function ContactPage() {
    const contactInfo = [
        {
            title: "Correo Electrónico",
            value: "tania.mojica@Clarifysolutions.mx",
            icon: <MailOutlineIcon sx={{color: 'white'}}/>,
            link: "tania.mojica@Clarifysolutions.mx"
        },
        {
            title: "WhatsApp Directo",
            value: "+ 55 4901 7577",
            icon: <WhatsAppIcon sx={{color: 'white'}}/>,
            link: "https://wa.me/5549017577"
        },
        {
            title: "Presencia",
            value: "Zapopan, Jalisco / Remoto",
            icon: <LocationOnOutlinedIcon sx={{color: 'white'}}/>
        }
    ];

    return (
        <Container component="main" maxWidth={false} sx={{
            py: {xs: 8, md: 15},
            px: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }}>

            <Box component="section" sx={{mb: 12, textAlign: 'center', width: '100%'}}>
                <Stack spacing={3} alignItems="center">
                    <Typography
                        level="h1"
                        sx={{
                            fontWeight: 900,
                            fontSize: {xs: "3rem", md: "5.5rem"},
                            color: 'white',
                            lineHeight: 1.1,
                        }}>
                        Hablemos de tu próximo <Typography component="span" sx={{color: 'primary.400'}}>gran paso</Typography>
                    </Typography>

                    <Typography sx={{color: 'white', fontSize: '1.2rem', maxWidth: '1200px', opacity: 0.8, mx: 'auto'}}>
                        Estamos listos para transformar la incertidumbre de tu negocio en una estrategia
                        con resultados medibles. Déjanos tus datos y nos pondremos en contacto.
                    </Typography>
                </Stack>
            </Box>

            <Grid container spacing={3} sx={{width: '100%', maxWidth: '1200px', mb: 10}}>
                {contactInfo.map((info, i) => (
                    <Grid key={i} xs={12} md={4}>
                        <Card
                            component="a"
                            href={info.link}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            variant="plain"
                            sx={{
                                ...glassStyle,
                                p: 4,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    background: "rgba(255, 255, 255, 0.08)",
                                    transform: 'translateY(-5px)',
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                }
                            }}
                        >
                            <Box sx={{
                                width: 50, height: 50, borderRadius: '14px',
                                bgcolor: 'rgba(255, 255, 255, 0.05)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2
                            }}>
                                {info.icon}
                            </Box>
                            <Typography level="body-sm" sx={{color: 'white', fontWeight: 700, mb: 0.5}}>
                                {info.title}
                            </Typography>
                            <Typography sx={{color: 'white', fontWeight: 600, fontSize: '1.1rem'}}>
                                {info.value}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box component="section" sx={{width: '100%', maxWidth: 'xl', position: 'relative'}}>
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(177, 157, 255, 0.08) 0%, transparent 70%)',
                    zIndex: -1, pointerEvents: 'none'
                }}/>

                <Card variant="plain" sx={{
                    ...glassStyle, p: {xs: 4, md: 6}, boxShadow: '0 20px 80px rgba(0,0,0,0.4)', overflow: 'hidden'
                }}>
                    <Grid container spacing={6} sx={{alignItems: 'center'}}>
                        <Grid xs={12} md={5}>
                            <Stack spacing={3}>
                                <Typography level="h3" sx={{color: 'white', fontWeight: 800, fontSize: '2.5rem', lineHeight: 1.2}}>
                                    ¿Listo para <Typography component="span" sx={{color: 'primary.400'}}>empezar?</Typography>
                                </Typography>
                                <Typography sx={{color: 'white', fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.8}}>
                                    Cuéntanos los desafíos actuales de tu negocio. Nuestro equipo analizará tu caso para ofrecerte:
                                </Typography>
                                <Stack spacing={2}>
                                    {["Diagnóstico estratégico inicial.", "Identificación de cuellos de botella.", "Ruta personalizada de crecimiento."].map((text, i) => (
                                        <Box key={i} sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.400' }}/>
                                            <Typography sx={{color: 'white', fontWeight: 500}}>{text}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                                <Box sx={{pt: 2}}>
                                    <Typography sx={{color: 'white', opacity: 0.5, fontSize: '1rem', fontStyle: 'italic'}}>
                                        * Tu información está protegida y es estrictamente confidencial.
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid xs={12} md={7}>
                            <ContactForm/>
                        </Grid>
                    </Grid>
                </Card>
            </Box>

            <Box component="section" sx={{mt: 20, mb: 10, width: '100%', maxWidth: 'lg'}}>
                <Stack spacing={2} sx={{textAlign: 'center', mb: 8}}>
                    <Typography level="h2" sx={{fontWeight: 800, color: "white", fontSize: '3rem'}}>
                        Preguntas <Typography component="span" sx={{color: 'primary.400'}}>Frecuentes</Typography>
                    </Typography>
                    <Typography sx={{color: 'white', fontSize: '1.2rem', opacity: 0.8, mx: 'auto'}}>
                        Desliza para conocer más sobre nuestra metodología.
                    </Typography>
                </Stack>

                <AccordionGroup
                    sx={{
                        [`& .MuiAccordion-root`]: {
                            ...glassStyle,
                            mb: 2,
                            transition: 'all 0.4s ease',
                            bgcolor: 'transparent',
                            overflow: 'hidden',
                            border: '1px solid rgba(255, 255, 255, 0.08)',

                            '&:hover': {
                                background: "rgba(255, 255, 255, 0.05)",
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover .MuiAccordionDetails-root': {
                                opacity: 1,
                                visibility: 'visible',
                            }
                        }
                    }}>
                    {faqs.map((item, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                indicator={<AddIcon sx={{ color: 'white' }} />}
                                sx={{
                                    color: 'white !important',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    py: 2,
                                    '&:hover': { bgcolor: 'transparent !important' },
                                    '&.Mui-expanded': { bgcolor: 'transparent !important' },

                                    [`& .MuiAccordionSummary-button`]: {
                                        color: 'white !important',
                                        '&:hover': {
                                            bgcolor: 'transparent !important',
                                        },
                                        '&.Mui-expanded': {
                                            color: 'white !important',
                                        }
                                    },
                                    [`& .MuiAccordionSummary-content`]: {
                                        color: 'white !important',
                                    }
                                }}>
                                {item.q}
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{
                                    color: 'white',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    px: 2,

                                }}>
                                <Box sx={{ pb: 2, opacity: 0.8, fontSize: '1rem', lineHeight: 1.6 }}>
                                    {item.a}
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionGroup>
            </Box>
        </Container>
    );
}
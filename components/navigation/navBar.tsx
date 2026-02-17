'use client'

import {Box, Button, Sheet, Typography, IconButton, Drawer, List, ListItem, ListItemButton} from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    const pathName = usePathname();
    const [open, setOpen] = useState(false);

    const options = [
        {label: "Inicio", path: "/"},
        {label: "Blog", path: "/blog"},
        {label: "Servicios", path: "/servicios"},
        {label: "Sobre Nosotros", path: "/sobre-nosotros"}
    ];

    return (
        <Sheet sx={styles.navBar} component="nav">
            <Box sx={styles.logo}>
                <Image src="/Clarify_H1.png" fill alt="Logo" style={{objectFit: 'contain'}}/>
            </Box>

            <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 3, alignItems: "center"}}>
                <Box sx={styles.menu}>
                    {options.map((option, index) => {
                        const isActive = pathName === option.path;
                        return (
                            <Sheet
                                key={index}
                                sx={{
                                    ...styles.menuOption,
                                    backgroundColor: isActive ? 'primary.100' : 'transparent',
                                    color: isActive ? 'primary.700' : 'text.primary',
                                }}>
                                <Typography component={Link} href={option.path} sx={styles.linkText}>
                                    {option.label}
                                </Typography>
                            </Sheet>
                        );
                    })}
                </Box>
                <Button variant="solid" color="primary" size="lg">Contáctanos</Button>
            </Box>


            <Box sx={{display: {xs: 'flex', md: 'none'}, alignItems: 'center', gap: 1}}>
                <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                    <MenuIcon/>
                </IconButton>
            </Box>

            <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
                <Box sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Box sx={styles.logo}>
                        <Image src="/Clarify_H1.png" fill alt="Logo" style={{objectFit: 'contain'}}/>
                    </Box>
                    <List>
                        {options.map((option) => (
                            <ListItem key={option.path}>
                                <ListItemButton
                                    component={Link}
                                    href={option.path}
                                    onClick={() => setOpen(false)}
                                    selected={pathName === option.path}
                                    sx={{borderRadius: 'md'}}
                                >
                                    {option.label}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Button fullWidth>Contáctanos</Button>
                </Box>
            </Drawer>
        </Sheet>
    );
}

const styles = {
    navBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        p:2,
        px: 5,
        borderRadius: "0px 0px 10px 10px",
        boxShadow: 'sm',
        position: 'sticky',
        top: 0,
        zIndex: 1,

    },
    logo: {height: 50, width: 120, position: 'relative'},
    menu: {display: 'flex', gap: 1},
    menuOption: {p: 1, px: 2, borderRadius: '8px', transition: '0.2s'},
    linkText: {textDecoration: 'none', color: 'inherit', fontWeight: 'bold'}
}
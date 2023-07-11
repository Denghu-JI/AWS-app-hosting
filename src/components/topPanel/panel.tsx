"use client"
import React, { useState, useEffect } from 'react';
import {inLabStyle} from './style'
import TreeContext from './context';
import {onClick} from '../Rectangle/treeComponent'
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton'
import {MenuItem} from '@mui/material';
import {IconButton} from '@mui/material';
import {Menu} from '@mui/material';







const Panel : React.FC<onClick> = ({onClickTree, onClickTheme}) => {
    const [viewportDim, setViewportDim] = useState({height : 0, width : 0});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [phone_mode, set_phone_mode] = useState<boolean>(false)

    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 600) set_phone_mode(true)
        else set_phone_mode(false)
      }, [phone_mode]);
      
    useEffect(() => {
        setViewportDim({height: window.innerHeight, width: window.innerWidth});
    }, []);

    const barDim = {
        height: viewportDim.height * 0.05,
        width: viewportDim.width
    }


    const selectTree = (event: any, newValue: string) => {
        console.log(newValue);
        onClickTree(newValue);
        setTree(newValue);
    };

    const selectTreebar = (event: any) => {
        console.log(event.target.value)
        onClickTree(event.target.value);
        setTree(event.target.value);
    };
    //tree selection
    const [selectedTree, setTree] = useState("CoFI Methods");
    
    function styleText(content : string) {
        return (<div style = {inLabStyle.selectTextCSS}>
            {content}
        </div>)
    }

    function treeSelection() {

        return (
            <Select value={selectedTree} onChange={selectTreebar} sx = {inLabStyle.selectCSS}>
                <MenuItem value="CoFI Methods">{styleText("CoFI Methods")}</MenuItem>
                <MenuItem value="CoFI Examples">{styleText("CoFI Examples")}</MenuItem>
                <MenuItem value="Espresso Problems">{styleText("Espresso Problems")}</MenuItem>
            </Select>
        )
    }

    function logo() {
        return (
            <img src="/icon2.png" alt="logo" style={inLabStyle.logoCSS} />
        )
    }


    function sideMenu() {
        const options = [
                'use light theme',
                'use dark theme',
                'use special theme',
                'leave a comments?',
          ];
          const ITEM_HEIGHT = 48;
        const open = Boolean(anchorEl);

        const handleClick = (event : any) => {
            setAnchorEl(event.currentTarget)
        };

        const handleClose = (o : any) => {
            onClickTheme(o)
            setAnchorEl(null);
        };

        return (
            <div style={inLabStyle.logoCSS}>
            <IconButton onClick={handleClick} style={{ padding: 0 }}>
               <img src="/icon.webp" alt="logo" style={{height : `${barDim.height}px`}} />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '200ch',
                    height: '100%'
                },
                }}
            >
                {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={() =>handleClose(option)}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
            </div>
        );
    }

    function treeSelection_wide() {
        return (
            <div >
            <ToggleButtonGroup
                value={selectedTree}
                exclusive
                onChange={selectTree}
                aria-label="CoFI Methods"
                style={{height: '80%'}}
                >
                <ToggleButton value="CoFI Methods" aria-label="CoFI Methods">
                    {styleText("CoFI Methods")}
                </ToggleButton>
                <ToggleButton value="CoFI Examples" aria-label="CoFI Examples">
                    {styleText("CoFI Examples")}
                </ToggleButton>
                <ToggleButton value="Espresso Problems" aria-label="Espresso Problems">
                    {styleText("Espresso Problems")}
                </ToggleButton>
            </ToggleButtonGroup>
            </div>
        )
    }



    function bar_phone() {
        return (
            <Box sx={inLabStyle.barCSS}>
                {logo()}
                {treeSelection()}
                {sideMenu()}
            </Box>
            )
        }
        
    function bar_wide() {
    return (
        <Box sx={inLabStyle.barCSS}>
            {logo()}
            {treeSelection_wide()}
            {sideMenu()}
        </Box>
        )
    }  

    function bar() {
        console.log(phone_mode)
        if (phone_mode) return bar_wide()
        else return bar_phone()
    }

    //-------------------------------------------------------------
    return (
        <div style = {{height: `${barDim.height}px`, width: '100%'}}>
            {bar()}
        </div>
    )
}


export default Panel


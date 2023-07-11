"use client"
import React, { useState }  from 'react';
import TreeComponent from '../Rectangle/Rectangle';
import TreeContext from './context';
import Panel from './panel';
import Popup from './popup'


function TopPanel() {
  const [current_tree, setCurrentTree] = useState('CoFI Methods');
  const [current_theme, setCurrentTheme] = useState('light');
  const [popup, setPopup] = useState<{visible: boolean, selectedMethod: string | null}>({visible: false, selectedMethod: "CoFI",});
  return (
    <div>
        <Panel onClickTree ={setCurrentTree} onClickTheme={setCurrentTheme}  />
        <TreeComponent selectedTree = {current_tree} selectedTheme = {current_theme} setPopup={setPopup}/>
        <Popup popupContent={popup} setPopup={setPopup}/>
    </div>
  );
}
  

export default TopPanel;
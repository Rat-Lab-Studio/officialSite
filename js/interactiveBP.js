// interactiveBP.js
import { isMobile } from "./ui.js";

let buttonImages =  {};
let defaultImage = '';

if (isMobile()){
  console.log("ismobile")
  buttonImages = {
    CELL1: 'media/cell_buttons_phone/CELL1.png',
    CELL2: 'media/cell_buttons_phone/CELL2.png',
    CELL3: 'media/cell_buttons_phone/CELL3.png',
    CELL4: 'media/cell_buttons_phone/CELL4.png',
    CELL5: 'media/cell_buttons_phone/CELL5.png',
    CELL6: 'media/cell_buttons_phone/CELL6.png',
    CELL7: 'media/cell_buttons_phone/CELL7.png',
    CELL8: 'media/cell_buttons_phone/CELL8.png',
    CELL9: 'media/cell_buttons_phone/CELL9.png',
    CELL10: 'media/cell_buttons_phone/CELL10.png',
    CELL11: 'media/cell_buttons_phone/CELL11.png',
    CELL12: 'media/cell_buttons_phone/CELL12.png',
    CELL13: 'media/cell_buttons_phone/CELL13.png',
    CELL14: 'media/cell_buttons_phone/CELL14.png',
    CELL15: 'media/cell_buttons_phone/CELL15.png',
    CELL16: 'media/cell_buttons_phone/CELL16.png',
    CELL17: 'media/cell_buttons_phone/CELL17.png',
    CELL18: 'media/cell_buttons_phone/CELL18.png',
    CELL19: 'media/cell_buttons_phone/CELL19.png',
    CELL20: 'media/cell_buttons_phone/CELL20.png'
    }
    defaultImage = 'media/CellStringPhone.png';
  }else{
  buttonImages = {
    CELL1: 'media/cell_buttons_pc/CELL1.png',
    CELL2: 'media/cell_buttons_pc/CELL2.png',
    CELL3: 'media/cell_buttons_pc/CELL3.png',
    CELL4: 'media/cell_buttons_pc/CELL4.png',
    CELL5: 'media/cell_buttons_pc/CELL5.png',
    CELL6: 'media/cell_buttons_pc/CELL6.png',
    CELL7: 'media/cell_buttons_pc/CELL7.png',
    CELL8: 'media/cell_buttons_pc/CELL8.png',
    CELL9: 'media/cell_buttons_pc/CELL9.png',
    CELL10: 'media/cell_buttons_pc/CELL10.png',
    CELL11: 'media/cell_buttons_pc/CELL11.png',
    CELL12: 'media/cell_buttons_pc/CELL12.png',
    CELL13: 'media/cell_buttons_pc/CELL13.png',
    CELL14: 'media/cell_buttons_pc/CELL14.png',
    CELL15: 'media/cell_buttons_pc/CELL15.png',
    CELL16: 'media/cell_buttons_pc/CELL16.png',
    CELL17: 'media/cell_buttons_pc/CELL17.png',
    CELL18: 'media/cell_buttons_pc/CELL18.png',
    CELL19: 'media/cell_buttons_pc/CELL19.png',
    CELL20: 'media/cell_buttons_pc/CELL20.png'
    }
    defaultImage = 'media/CellStringPc.png';
  };


export function initInteractiveBP(container) {
  const interactiveImg = container.querySelector('.interactive_img_bp');
  const areas = container.querySelectorAll('.area_bp');

  if (!interactiveImg || areas.length === 0) return;

  let activeCell = null;

  areas.forEach(area => {
    const cellId = area.getAttribute('alt');

    area.addEventListener('mouseenter', () => {
      interactiveImg.src = buttonImages[cellId];
    });

    area.addEventListener('mouseleave', () => {
      interactiveImg.src = activeCell ? buttonImages[activeCell] : defaultImage;
    });

    area.addEventListener('click', e => {
      activeCell = cellId;
      interactiveImg.src = buttonImages[cellId];
    });
  });
}

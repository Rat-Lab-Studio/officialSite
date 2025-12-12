// interactiveBESS.js
import { isMobile } from "./ui.js";

let buttonImages =  {};
let defaultImage = '';

if (isMobile()){
  console.log("ismobile")
  buttonImages = {
  BP1:  'media/bp_buttons_phone/BP1.png',
  BP2:  'media/bp_buttons_phone/BP2.png',
  BP3:  'media/bp_buttons_phone/BP3.png',
  BP4:  'media/bp_buttons_phone/BP4.png',
  BP5:  'media/bp_buttons_phone/BP5.png',
  BP6:  'media/bp_buttons_phone/BP6.png',
  BP7:  'media/bp_buttons_phone/BP7.png',
  BP8:  'media/bp_buttons_phone/BP8.png',
  BP9:  'media/bp_buttons_phone/BP9.png',
  BP10: 'media/bp_buttons_phone/BP10.png',
  BP11: 'media/bp_buttons_phone/BP11.png',
  BP12: 'media/bp_buttons_phone/BP12.png',
  BP13: 'media/bp_buttons_phone/BP13.png'
  }
  defaultImage = 'media/BessStringPhone.png'
}else{
  buttonImages = {
      BP1: 'media/bp_buttons_pc/BP1.png',
      BP2: 'media/bp_buttons_pc/BP2.png',
      BP3: 'media/bp_buttons_pc/BP3.png',
      BP4: 'media/bp_buttons_pc/BP4.png',
      BP5: 'media/bp_buttons_pc/BP5.png',
      BP6: 'media/bp_buttons_pc/BP6.png',
      BP7: 'media/bp_buttons_pc/BP7.png',
      BP8: 'media/bp_buttons_pc/BP8.png',
      BP9: 'media/bp_buttons_pc/BP9.png',
      BP10: 'media/bp_buttons_pc/BP10.png',
      BP11: 'media/bp_buttons_pc/BP11.png',
      BP12: 'media/bp_buttons_pc/BP12.png',
      BP13: 'media/bp_buttons_pc/BP13.png',
  }
  defaultImage = 'media/BessStringPc.png'
};

export function initInteractiveBESS(container) {
  const interactiveImg = container.querySelector('.interactive_img_bess');
  const areas = container.querySelectorAll('.area_bess');

  if (!interactiveImg || areas.length === 0) return;

  let activeBP = null;

  areas.forEach(area => {
    const bpId = area.getAttribute('alt');

    area.addEventListener('mouseenter', () => {
      interactiveImg.src = buttonImages[bpId];
    });

    area.addEventListener('mouseleave', () => {
      interactiveImg.src = activeBP ? buttonImages[activeBP] : defaultImage;
    });

    area.addEventListener('click', e => {
      activeBP = bpId;
      interactiveImg.src = buttonImages[bpId];
    });
  });
}

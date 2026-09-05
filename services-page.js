(()=>{
  const options=[...document.querySelectorAll('.service-option')];
  const signalSteps=[...document.querySelectorAll('.signal-step[data-service-index]')];
  const selector=document.querySelector('.service-selector');
  const servicesMain=document.querySelector('.services-main');
  const stage=document.getElementById('service-stage');
  const image=document.getElementById('service-image');
  const label=document.getElementById('service-window-label');
  const rate=document.getElementById('service-rate');
  const summary=document.getElementById('service-summary');
  const link=document.getElementById('service-link');
  const detail=document.querySelector('.service-detail');
  const mobileLayout=window.matchMedia('(max-width:740px)');
  let active=0;
  let changeTimer;

  function alignDetailsBelowHeader(option){
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      const header=document.querySelector('.header');
      const headerHeight=header?header.getBoundingClientRect().height:74;
      const targetTop=window.scrollY+option.getBoundingClientRect().top-headerHeight-12;
      const finalTop=Math.max(0,targetTop);
      const reducedMotion=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
      if(reducedMotion){
        window.scrollTo({top:finalTop,left:0,behavior:'auto'});
        return;
      }
      window.scrollTo({top:Math.max(0,finalTop-10),left:0,behavior:'auto'});
      requestAnimationFrame(()=>window.scrollTo({top:finalTop,left:0,behavior:'smooth'}));
    }));
  }

  function placePanels(option){
    if(mobileLayout.matches){
      selector.setAttribute('role','group');
      selector.removeAttribute('aria-orientation');
      option.insertAdjacentElement('afterend',stage);
      stage.insertAdjacentElement('afterend',detail);
    }else{
      selector.setAttribute('role','tablist');
      selector.setAttribute('aria-orientation','vertical');
      selector.insertAdjacentElement('afterend',detail);
      servicesMain.append(stage);
    }
  }

  function activate(index,moveFocus=false,showDetails=false){
    if(index<0) index=options.length-1;
    if(index>=options.length) index=0;
    const option=options[index];
    const imageChanged=image.getAttribute('src')!==option.dataset.image;

    options.forEach((item,itemIndex)=>{
      const selected=itemIndex===index;
      item.classList.toggle('is-active',selected);
      item.setAttribute('aria-selected',String(selected));
      item.setAttribute('aria-expanded',String(selected&&mobileLayout.matches));
      item.tabIndex=selected?0:-1;
    });
    signalSteps.forEach(item=>item.classList.toggle('is-active',Number(item.dataset.serviceIndex)===index));

    active=index;
    placePanels(option);
    stage.setAttribute('aria-labelledby',option.id);
    label.textContent=option.dataset.label;
    rate.textContent=option.dataset.rate;
    summary.textContent=option.dataset.summary;
    link.href=option.dataset.link;
    link.innerHTML=`Explore ${option.dataset.label.toLowerCase()} <span aria-hidden="true">→</span>`;
    detail.classList.add('is-changing');
    clearTimeout(changeTimer);
    changeTimer=setTimeout(()=>detail.classList.remove('is-changing'),150);

    if(imageChanged){
      stage.classList.add('is-changing');
      const nextImage=new Image();
      nextImage.src=option.dataset.image;
      const swap=()=>{
        image.src=option.dataset.image;
        image.alt=option.dataset.alt;
        requestAnimationFrame(()=>stage.classList.remove('is-changing'));
      };
      nextImage.addEventListener('load',swap,{once:true});
      nextImage.addEventListener('error',()=>stage.classList.remove('is-changing'),{once:true});
    }
    if(moveFocus) option.focus({preventScroll:true});
    if(showDetails&&mobileLayout.matches){
      alignDetailsBelowHeader(option);
    }
  }

  options.forEach((option,index)=>{
    option.setAttribute('aria-controls','service-detail service-stage');
    option.addEventListener('pointerenter',event=>{
      if(event.pointerType!=='touch'&&!mobileLayout.matches) activate(index);
    });
    option.addEventListener('focus',()=>{if(!mobileLayout.matches) activate(index)});
    option.addEventListener('click',()=>activate(index,false,true));
    option.addEventListener('keydown',event=>{
      if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
      event.preventDefault();
      if(event.key==='ArrowDown') activate(active+1,true);
      if(event.key==='ArrowUp') activate(active-1,true);
      if(event.key==='Home') activate(0,true);
      if(event.key==='End') activate(options.length-1,true);
    });
  });

  signalSteps.forEach(step=>{
    const action=step.querySelector('.signal-action');
    action.addEventListener('click',()=>{
      const index=Number(step.dataset.serviceIndex);
      activate(index,true,true);
    });
  });

  mobileLayout.addEventListener('change',()=>activate(active));
  activate(0);
})();

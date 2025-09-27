
// Persist checkboxes via localStorage by page
(function(){
  const key = 'arch-portfolio:' + location.pathname;
  // restore
  try{
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    for(const id in saved){
      const el = document.getElementById(id);
      if(el && el.type==='checkbox'){ el.checked = !!saved[id]; }
    }
  }catch(e){}
  // listen
  document.addEventListener('change', (e)=>{
    const t = e.target;
    if(t && t.type==='checkbox' && t.id){
      let saved = {};
      try{ saved = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
      saved[t.id] = !!t.checked;
      localStorage.setItem(key, JSON.stringify(saved));
    }
  });
})();

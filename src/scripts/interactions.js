import { routes } from '../lib/content.js';
import { icon } from '../lib/visuals.js';

// Mobile navigation: aria-expanded and hidden state always agree.
const menuBtn=document.querySelector('.mobile-toggle');
const menu=document.getElementById('mobile-menu');
menuBtn?.addEventListener('click',()=>{const isOpen=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!isOpen));menuBtn.setAttribute('aria-label',isOpen?'Open navigation':'Close navigation');menuBtn.innerHTML=icon(isOpen?'menu':'close',23);menu.hidden=isOpen;});
menu?.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.hidden=true;menuBtn.setAttribute('aria-expanded','false');menuBtn.innerHTML=icon('menu',23);menuBtn.focus();}});

// Interactive SVG cutaway: illustration only, never simulated measurements.
document.querySelectorAll('.house-widget').forEach(widget=>{widget.querySelectorAll('[data-mode-set]').forEach(btn=>btn.addEventListener('click',()=>{const mode=btn.dataset.modeSet;widget.dataset.mode=mode;widget.querySelectorAll('[data-mode-set]').forEach(b=>{const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});widget.querySelector('.house-mode-label').textContent=`${mode.toUpperCase()} / ILLUSTRATION`; }));});

// Navigation aid; answers are authored, not AI-generated or diagnostic.
document.querySelectorAll('[data-comfort]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-comfort]').forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});const route=routes[button.dataset.comfort];const panel=document.querySelector('.selector-outcome');panel.querySelector('.outcome-eyebrow').textContent=route.eyebrow;panel.querySelector('.outcome-title').textContent=route.title;panel.querySelector('.outcome-body').textContent=route.explanation;panel.querySelector('.outcome-link').innerHTML=`${route.link} ${icon('arrow')}`;panel.querySelector('.outcome-link').href=route.href;}));

// Without verified coverage data, all entries must be returned as unknown.
const zipForm=document.getElementById('area-check');
zipForm?.addEventListener('submit',e=>{e.preventDefault();const zip=zipForm.querySelector('input');const target=document.getElementById('area-result');if(!/^[0-9]{5}$/.test(zip.value.trim())){target.textContent='Please enter a valid five-digit US ZIP code.';zip.setAttribute('aria-invalid','true');zip.focus();return;}zip.removeAttribute('aria-invalid');target.textContent=`Coverage for ${zip.value.trim()} cannot be confirmed. No service areas have been verified for this demo.`;});

// No transport endpoint exists. This form never claims it has submitted a request.
const contactForm=document.getElementById('contact-form');
contactForm?.addEventListener('submit',e=>{e.preventDefault();const result=document.getElementById('contact-status');let invalid=[...contactForm.querySelectorAll('input,select,textarea')].find(f=>!f.checkValidity());if(invalid){invalid.setAttribute('aria-invalid','true');invalid.focus();result.textContent='Please complete the required fields and check the demo acknowledgement.';return;}result.textContent='Demo review complete. Nothing has been sent or saved. Connect a real scheduling or CRM provider before enabling submissions.';});
if(contactForm){const params=new URLSearchParams(location.search);const requested=params.get('service');const selected=contactForm.querySelector('#customer-service');if(requested && [...selected.options].some(o=>o.value===requested))selected.value=requested;}

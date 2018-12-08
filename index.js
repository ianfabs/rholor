const rholor = ()=>{
    const l='0123456789ABCDEF';
    let c='#';
    for(let i=0;i<6;i++)with(Math){c+=l[floor(random()*16)]}
    return c;
}

module.exports = rholor;
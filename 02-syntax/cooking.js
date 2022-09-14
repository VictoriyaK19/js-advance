function cooking(num, oper1, oper2, oper3, oper4, oper5) {
   
    num = parseInt(num)

    switch (oper1) {
        case 'chop':
            num /= 2; break;
            
        case 'dice':
            num = Math.sqrt(num); break;
            
        case 'spice':
            num += 1; break;
            
        case 'bake':
            num *= 3; break;
        
        case 'fillet':
            num *= 0.8; break;
    } 
    console.log(num);

    switch (oper2) {
        case 'chop':
            num /= 2; break;
            
        case 'dice':
            num = Math.sqrt(num); break;
            
        case 'spice':
            num += 1; break;
            
        case 'bake':
            num *= 3; break;
        
        case 'fillet':
            num *= 0.8; break;
    } 
    console.log(num);

    switch (oper3) {
        case 'chop':
            num /= 2; break;
            
        case 'dice':
            num = Math.sqrt(num); break;
            
        case 'spice':
            num += 1; break;
            
        case 'bake':
            num *= 3; break;
        
        case 'fillet':
            num *= 0.8; break;
    } 
    console.log(num);

    switch (oper4) {
        case 'chop':
            num /= 2; break;
            
        case 'dice':
            num = Math.sqrt(num); break;
            
        case 'spice':
            num += 1; break;
            
        case 'bake':
            num *= 3; break;
        
        case 'fillet':
            num *= 0.8; break;
    } 
    console.log(num);

    switch (oper5) {
        case 'chop':
            num /= 2; break;
            
        case 'dice':
            num = Math.sqrt(num); break;
            
        case 'spice':
            num += 1; break;
            
        case 'bake':
            num *= 3; break;
        
        case 'fillet':
            num *= 0.8; break;
    } 
    
    console.log(num)
}


cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

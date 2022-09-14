function walk(steps, footprint, speed) {
    let hours = '00';
    let minutes = '00';
    let seconds = '00';

    let distance = (steps * footprint) / 1000;
    let rest = Math.floor(distance * 1000 / 500); 
    rest *= 60
    
    let time = distance / speed * 3600 + rest;
    hours = Math.floor(time / 3600);
    minutes = Math.floor((time-hours*3600)/60)
    seconds = Math.ceil(time - hours*3600 - minutes*60);
    
    
    if (hours < 10) {
        hours = `0${hours}`
    } if (hours == 0) {
        hours = '00';
    }
    
    if (minutes < 10) {
        minutes = `0${minutes}`
    } if (minutes == 0) {
        minutes = '00';
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5)
walk(49483, 0.70, 5)

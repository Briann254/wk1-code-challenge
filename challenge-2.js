const speedDetector = (speed) => {
    // If speed is less than 70, log to the console "Ok"
    if (speed < 70) {
        return 'Ok';
    }

    // for every 5km above 70, log 1 point
    // This is achieved by subtracting 70 from the speed and dividing by 5
    const points = Math.floor((speed - 70) / 5);

    // if points are 12 or more, log "license suspended"
    if (points >= 12) {
        return 'License suspended';
    }
    // if points are less than 12, log "points"
    else {
        return `Points: ${points}`;
    }
    }

console.log(speedDetector(80));
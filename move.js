function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys (left, bottom, handleDirectionChange = false) {
        let direction = null;
        let x = left;
        let y = bottom;
        
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter() {
            if((direction === 'west') && (x >= 0)) {
                x--
            } else if ((direction === 'north') && (y <= (window.innerHeight - 80))) {
                y++
            } else if ((direction === 'east') && (x <= window.innerWidth - 60)) {
                x++
            } else if ((direction === 'south') && (y >= 0)) {
                y--
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;

            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            if(handleDirectionChange) {
                handleDirectionChange(direction)
            }
        })
        document.addEventListener('keyup', function(e){
            direction = null
            if(handleDirectionChange) {
                handleDirectionChange(direction)
            }
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}
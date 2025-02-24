 /* hamburger */

document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
  });


  /* The moon script */
  
  let running = true;
        let rotation = 0;
        let symbolCount = 0;
        const maxSymbols = 20000;

        function getRandomColor() {
            return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        }

        function placeSymbol() {
            if (!running || symbolCount >= maxSymbols) return;

            const symbol = document.createElement("div");
            symbol.classList.add("symbol");
            symbol.textContent = "☾";
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            rotation = (rotation + 30) % 360;
            
            symbol.style.left = `${x}px`;
            symbol.style.top = `${y}px`;
            symbol.style.color = getRandomColor();
            symbol.style.transform = `rotate(${rotation}deg)`;
            
            document.getElementById("index").appendChild(symbol);
            symbolCount++;

            setTimeout(placeSymbol, 200);
        }

        document.getElementById("index").addEventListener("click", () => {
            running = false;
            document.querySelectorAll(".symbol").forEach(el => el.remove());
        });

        placeSymbol();
  

        

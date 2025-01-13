<script setup lang="ts">
  const chainwebInit = () => {
    const canvas = document.getElementById("chainwebCanvas") as HTMLCanvasElement;
    console.log('first');
    if (!canvas) {
      return;
    }
      console.log('second')
    const ctx = canvas.getContext("2d");

    type Node = {
      id: number,
      x: number,
      y: number,
      connections: number[],
    }
    const nodes: Node[] = [
      { id: 0, x: 300, y: 100, connections: [5, 10, 15] },
      { id: 1, x: 400, y: 200, connections: [6, 11, 16] },
      { id: 2, x: 400, y: 400, connections: [7, 12, 17] },
      { id: 3, x: 300, y: 500, connections: [8, 13, 18] },
      { id: 4, x: 200, y: 400, connections: [9, 14, 19] },
      { id: 5, x: 200, y: 200, connections: [0, 9, 10] },
      { id: 6, x: 350, y: 300, connections: [1, 5, 9] },
      { id: 7, x: 300, y: 350, connections: [2, 6, 8] },
      { id: 8, x: 300, y: 300, connections: [3, 7, 6] },
      { id: 9, x: 250, y: 300, connections: [4, 5, 8] },
      { id: 10, x: 250, y: 150, connections: [0, 5] },
      { id: 11, x: 450, y: 150, connections: [1, 6] },
      { id: 12, x: 450, y: 450, connections: [2, 7] },
      { id: 13, x: 250, y: 550, connections: [3, 4] },
      { id: 14, x: 150, y: 450, connections: [4] },
      { id: 15, x: 150, y: 150, connections: [0] },
      { id: 16, x: 550, y: 150, connections: [1] },
      { id: 17, x: 550, y: 450, connections: [2] },
      { id: 18, x: 450, y: 550, connections: [3] },
      { id: 19, x: 150, y: 250, connections: [4] }
    ];

    let highlightedNode: number | null = null;

    function draw() {
      if (!ctx || !canvas) {
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "cyan";
      ctx.lineWidth = 1;
      nodes.forEach((node) => {
        node.connections.forEach((connId) => {
          const connNode = nodes.find((n) => n.id === connId);
          if (!connNode) {
            return;
          }
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connNode.x, connNode.y);
          ctx.stroke();
        });
      });

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = highlightedNode === node.id ? "red" : "blue";
        ctx.fill();
        ctx.strokeStyle = highlightedNode === node.id ? "lime" : "cyan";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.id.toString(), node.x, node.y);
      });
    }

    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      highlightedNode = null;

      nodes.forEach((node) => {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        if (Math.sqrt(dx * dx + dy * dy) < 20) {
          highlightedNode = node.id;
        }
      });

      draw();
    });

    draw();
  }

  chainwebInit();
</script>

<template>
  <div class="flex flex-col border border-cyan-400 rounded-md p-4 text-cyan-400 w-full max-w-4xl mx-auto">
    <div class="flex justify-between text-lg font-semibold mb-4">
      <span>CHAINWEB</span>
      <span>CHAIN ID: <span class="text-red-400">{{"None" }}</span></span>
    </div>
    <canvas id="chainwebCanvas" class="w-full h-auto"></canvas>
  </div>
</template>

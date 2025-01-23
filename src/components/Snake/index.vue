<template>
  <div class="snake-game">
    <div class="game-board" 
         :style="{ width: boardSize + 'px', height: boardSize + 'px' }"
         @keydown="handleKeyPress"
         tabindex="0"
         ref="gameBoard">
      <!-- 蛇身 -->
      <div v-for="(segment, index) in snake" 
           :key="index" 
           class="snake-segment"
           :style="{ 
             left: segment.x * gridSize + 'px', 
             top: segment.y * gridSize + 'px' 
           }">
      </div>
      <!-- 食物 -->
      <div class="food"
           :style="{ 
             left: food.x * gridSize + 'px', 
             top: food.y * gridSize + 'px' 
           }">
      </div>
    </div>
    <div class="game-info">
      <p>得分: {{ score }}</p>
      <button @click="startGame" v-if="!isPlaying">开始游戏</button>
      <button @click="pauseGame" v-else>暂停游戏</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnakeGame',
  data() {
    return {
      boardSize: 400,
      gridSize: 20,
      snake: [
        { x: 5, y: 5 }
      ],
      food: { x: 10, y: 10 },
      direction: 'right',
      isPlaying: false,
      gameInterval: null,
      score: 0
    }
  },
  methods: {
    startGame() {
      this.isPlaying = true
      this.gameInterval = setInterval(this.moveSnake, 200)
      this.$refs.gameBoard.focus()
    },
    pauseGame() {
      this.isPlaying = false
      clearInterval(this.gameInterval)
    },
    handleKeyPress(event) {
      const keyMap = {
        'ArrowUp': 'up',
        'ArrowDown': 'down',
        'ArrowLeft': 'left',
        'ArrowRight': 'right'
      }
      
      const newDirection = keyMap[event.key]
      if (!newDirection) return
      
      // 防止蛇直接掉头
      const opposites = {
        'up': 'down',
        'down': 'up',
        'left': 'right',
        'right': 'left'
      }
      
      if (opposites[this.direction] !== newDirection) {
        this.direction = newDirection
      }
    },
    moveSnake() {
      const head = { ...this.snake[0] }
      
      switch (this.direction) {
        case 'up':
          head.y--
          break
        case 'down':
          head.y++
          break
        case 'left':
          head.x--
          break
        case 'right':
          head.x++
          break
      }
      
      // 检查是否撞墙
      if (this.checkCollision(head)) {
        this.gameOver()
        return
      }
      
      this.snake.unshift(head)
      
      // 检查是否吃到食物
      if (head.x === this.food.x && head.y === this.food.y) {
        this.score += 10
        this.generateFood()
      } else {
        this.snake.pop()
      }
    },
    checkCollision(head) {
      // 检查是否撞墙
      if (head.x < 0 || 
          head.x >= this.boardSize / this.gridSize || 
          head.y < 0 || 
          head.y >= this.boardSize / this.gridSize) {
        return true
      }
      
      // 检查是否撞到自己
      return this.snake.some(segment => 
        segment.x === head.x && segment.y === head.y
      )
    },
    generateFood() {
      const maxPos = this.boardSize / this.gridSize - 1
      let newFood
      do {
        newFood = {
          x: Math.floor(Math.random() * maxPos),
          y: Math.floor(Math.random() * maxPos)
        }
      } while (this.snake.some(segment => 
        segment.x === newFood.x && segment.y === newFood.y
      ))
      this.food = newFood
    },
    gameOver() {
      alert(`游戏结束！得分：${this.score}`)
      this.pauseGame()
      this.resetGame()
    },
    resetGame() {
      this.snake = [{ x: 5, y: 5 }]
      this.direction = 'right'
      this.score = 0
      this.generateFood()
    }
  },
  unmounted() {
    if (this.gameInterval) {
      clearInterval(this.gameInterval)
    }
  }
}
</script>

<style scoped>
.snake-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.game-board {
  position: relative;
  background-color: #f0f0f0;
  border: 2px solid #333;
  outline: none;
}

.snake-segment {
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #4CAF50;
  border: 1px solid #45a049;
  border-radius: 2px;
}

.food {
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #ff4444;
  border: 1px solid #ff0000;
  border-radius: 50%;
}

.game-info {
  text-align: center;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style> 
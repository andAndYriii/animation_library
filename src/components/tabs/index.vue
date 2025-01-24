<template>
  <div class="tabs-list">
    <div 
      v-for="category in tabItems" 
      :key="category.category" 
      class="category-section"
    >
      <div class="category-title">
        <span class="title-icon"></span>
        {{ category.category }}
      </div>
      <ul class="category-items">
        <li 
          v-for="item in category.items" 
          :key="item.key"
          class="tab-item"
          :class="{ active: currentTab === item.key }"
          @click="chooseTab(item.key)"
        >
          <span class="tab-label">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { tabItems } from '@/assets/tabs-item'

const currentTab = ref('avatar')
const emit = defineEmits(['chooseHandle'])

const chooseTab = (key) => {
  currentTab.value = key
  emit('chooseHandle', key)
}
</script>

<style lang="less" scoped>
.tabs-list {
  .category-section {
    margin-bottom: 20px;

    .category-title {
      padding: 8px 16px;
      margin: 0 8px 8px;
      font-size: 13px;
      font-weight: 600;
      color: #1a1a1a;
      letter-spacing: 0.02em;
      background: #f5f5f5;
      border-radius: 6px;
      display: flex;
      align-items: center;
      transition: all 0.2s ease;

      .title-icon {
        width: 4px;
        height: 4px;
        background-color: #5865f2;
        border-radius: 50%;
        margin-right: 8px;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #5865f2;
          border-radius: 50%;
          opacity: 0.3;
          top: -2px;
          left: -2px;
        }
      }

      &:hover {
        background: #eef2ff;
        color: #5865f2;
      }
    }

    .category-items {
      list-style: none;
      padding: 0 8px;
      margin: 0;

      .tab-item {
        margin: 2px 0;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 13px;
        color: #4b5563;
        
        &:hover {
          background-color: #f3f4f6;
          color: #5865f2;
        }

        &.active {
          background-color: #5865f2;
          color: white;
          font-weight: 500;
        }

        .tab-label {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

:deep(.dark-theme) {
  .category-section {
    .category-title {
      color: #e6edf3;
      background: #21262d;

      &:hover {
        background: #2d333b;
        color: #58a6ff;
      }
    }

    .category-items {
      .tab-item {
        color: #8b949e;

        &:hover {
          background-color: #21262d;
          color: #58a6ff;
        }

        &.active {
          background-color: #1f6feb;
          color: white;
        }
      }
    }
  }
}
</style>

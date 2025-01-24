<template>
  <div class="app__container" :class="{ 'dark-theme': isDark }">
    <header class="app__header">
      <div class="logo">
        <svg viewBox="0 0 24 24" class="logo-icon" fill="currentColor" width="24" height="24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        Animation_Library
      </div>
      <moduleSwitch @changeHandle="changeTheme" />
    </header>
    
    <div class="app__main">
      <aside class="sidebar">
        <div class="sidebar__content">
          <div class="sidebar__header">组件导航</div>
          <Tabs @chooseHandle="showComponent" />
        </div>
      </aside>
      
      <main class="main__content">
        <div class="content__container">
          <component :is="currentComponent"></component>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {ref, shallowRef, markRaw, defineAsyncComponent } from "vue"
import Tabs from "@/components/tabs/index.vue"
import moduleSwitch from '@/components/moduleSwitch/index.vue'

let themeColor = ref('#f0f2f5')
let isDark = ref(true)

let currentComponent = shallowRef(defineAsyncComponent(() =>
    import(`@/components/avatar/index.vue`)
  ))

const showComponent = async (key) => {
  currentComponent.value = defineAsyncComponent(() =>
    import(`@/components/${key}/index.vue`)
  )
}

const changeTheme = (e) => {
  isDark.value = e
  themeColor.value = e ? '#0d1117' : '#ffffff'
}
</script>

<style lang="less" scoped>
.app__container {
  min-height: 100vh;
  background-color: #ffffff;
  color: #1f2328;
  transition: all 0.2s ease;

  &.dark-theme {
    background-color: #0d1117;
    color: #e6edf3;

    .app__header {
      background-color: #161b22;
      border-bottom: 1px solid #30363d;
    }

    .sidebar {
      background-color: #161b22;
      border-right: 1px solid #30363d;
      
      .sidebar__content {
        background-color: #161b22;
      }
    }

    .content__container {
      background-color: #161b22;
      border: 1px solid #30363d;
    }
  }
}

.app__header {
  height: 60px;
  padding: 0 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #d0d7de;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.2s ease;

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    
    .logo-icon {
      color: #5865f2;
    }
  }
}

.app__main {
  display: flex;
  padding-top: 60px;
  height: calc(100vh - 600px);
}

.sidebar {
  width: 140px;
  background-color: #ffffff;
  border-right: 1px solid #d0d7de;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  transition: all 0.2s ease;

  .sidebar__content {
    height: 100%;
    padding: 16px 0;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #8b949e;
      border-radius: 3px;
    }

    .sidebar__header {
      padding: 0 16px 8px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      color: #6c757d;
    }

    :deep(.tabs-list) {
      list-style: none;
      padding: 0 8px;
      margin: 0;

      .tab-item {
        margin: 2px 0;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        color: #6c757d;

        &:hover {
          background-color: #f8f9fa;
          color: #5865f2;
        }

        &.active {
          background-color: #5865f2;
          color: white;
        }

        .tab-icon {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tab-label {
          flex: 1;
        }
      }
    }
  }
}

.main__content {
  width: calc(100vw - 180px);
  flex: 1;
  margin-left: 140px;
  padding: 24px;
  height: calc(100vh - 120px);

  .content__container {
    height: 100%;
    background-color: #ffffff;
    border-radius: 6px;
    border: 1px solid #d0d7de;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.dark-theme {
  .sidebar {
    .sidebar__header {
      color: #8b949e;
    }

    :deep(.tabs-list) {
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

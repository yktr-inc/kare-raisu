<template>
  <div class="editor">
    <el-row>
      <el-col :span="12">
        <h2> Add a new post </h2>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" size="small" @click=saveContent>Publish my post</el-button>
      </el-col>
    </el-row>
    <br>
    <br>
    <br>
    <editor-menu-bubble :editor="editor" :keep-in-bounds="keepInBounds" v-slot="{ commands, isActive, menu }">
      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >

      <button
        class="menububble__button"
        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
        @click="commands.heading({ level: 1 })"
      >
        h1
      </button>

      <button
        class="menububble__button"
        :class="{ 'is-active': isActive.bold() }"
        @click="commands.bold"
      >
        bold
      </button>

      <button
        class="menububble__button"
        :class="{ 'is-active': isActive.italic() }"
        @click="commands.italic"
      >
        italic
      </button>

      <button
        class="menububble__button"
        @click="showImagePrompt(commands.image)"
      >
        Image
      </button>

      <button
        class="menububble__button"
        :class="{ 'is-active': isActive.code() }"
        @click="commands.code"
      >
        code
      </button>

      </div>
    </editor-menu-bubble>

    <editor-content class="editor__content" :editor="editor" />
        <editor-floating-menu :editor="editor" v-slot="{ commands, isActive, menu }">
          <div
            class="editor__floating-menu"
            :class="{ 'is-active': menu.isActive }"
            :style="`top: ${menu.top}px`"
          >

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 1 }) }"
              @click="commands.heading({ level: 1 })"
            >
              h1
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
            >
              h2
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 3 }) }"
              @click="commands.heading({ level: 3 })"
            >
              h3
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.code() }"
              @click="commands.code"
            >
              code
            </button>

          </div>
    </editor-floating-menu>
</div>
</template>

<script>
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import {
  Editor, EditorContent, EditorMenuBubble, EditorFloatingMenu,
} from 'tiptap';
import {
  Blockquote,
  BulletList,
  CodeBlockHighlight,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Image,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions';

export default {
  components: {
    EditorContent,
    EditorMenuBubble,
    EditorFloatingMenu,
  },
  data() {
    return {
      keepInBounds: true,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlockHighlight({
            languages: {
              javascript,
              css,
            },
          }),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Image(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h2>
            New post
          </h2>
          <p>
            Start writing your new post
          </p>
        `,
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here');
      if (src !== null) {
        command({ src });
      }
    },
    saveContent() {
      console.log(this.editor.getHTML());
    },
  },
};
</script>

<style lang="scss">
  @import "@/assets/variables.scss";
  @import "@/assets/main.scss";
  @import "@/assets/editor.scss";
  .editor {
    position: relative;
    &__floating-menu {
      position: absolute;
      margin-top: -0.25rem;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.2s, visibility 0.2s;
      &.is-active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>

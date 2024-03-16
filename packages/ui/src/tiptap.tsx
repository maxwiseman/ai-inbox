"use client";

import type { EditorProviderProps } from "@tiptap/react";
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconCheckbox,
  IconItalic,
  IconQuote,
  IconSeparatorHorizontal,
  IconStrikethrough,
  IconUnderline,
} from "@tabler/icons-react";
import {
  default as Blockquote,
  default as OrderedList,
} from "@tiptap/extension-blockquote";
import Code from "@tiptap/extension-code";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  CodeIcon,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrderedIcon,
  SubscriptIcon,
  SuperscriptIcon,
} from "lucide-react";

import { cn } from ".";
import { Card } from "./card";
import { Separator } from "./separator";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

function MenuBar(): React.ReactElement {
  const { editor } = useCurrentEditor();

  if (!editor) return <>Loading...</>;

  return (
    <div className="w-full overflow-x-hidden">
      <div className="no-scrollbar overflow-x-scroll p-2">
        <div className="flex w-full gap-3 p-2">
          <ToggleGroup
            type="multiple"
            value={[
              editor.isActive("bold") ? "Bold" : "",
              editor.isActive("italic") ? "Italic" : "",
              editor.isActive("strike") ? "Strike" : "",
              editor.isActive("underline") ? "Underline" : "",
            ]}
            variant="outline"
          >
            <ToggleGroupItem
              aria-label="Toggle bold"
              onClick={() => editor.chain().focus().toggleBold().run()}
              size="sm"
              value="Bold"
              variant="outline"
            >
              <IconBold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle italic"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              size="sm"
              value="Italic"
              variant="outline"
            >
              <IconItalic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle strikethrough"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              size="sm"
              value="Strike"
              variant="outline"
            >
              <IconStrikethrough className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle underline"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              size="sm"
              value="Underline"
              variant="outline"
            >
              <IconUnderline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            type="single"
            value={
              // eslint-disable-next-line no-nested-ternary -- its ok here
              editor.isActive("heading", { level: 1 })
                ? "H1"
                : // eslint-disable-next-line no-nested-ternary -- its ok here
                  editor.isActive("heading", { level: 2 })
                  ? "H2"
                  : editor.isActive("heading", { level: 3 })
                    ? "H3"
                    : ""
            }
            variant="outline"
          >
            <ToggleGroupItem
              aria-label="Toggle heading 1"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              size="sm"
              value="H1"
              variant="outline"
            >
              <Heading1 className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle heading 2"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              size="sm"
              value="H2"
              variant="outline"
            >
              <Heading2 className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle heading 3"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              size="sm"
              value="H3"
              variant="outline"
            >
              <Heading3 className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            type="multiple"
            value={[
              editor.isActive("blockquote") ? "Blockquote" : "",
              editor.isActive("bulletList") ? "Bulleted List" : "",
              editor.isActive("orderedList") ? "Ordered List" : "",
              editor.isActive("taskList") ? "Checkbox" : "",
              editor.isActive("superscript") ? "Superscript" : "",
              editor.isActive("subscript") ? "Subscript" : "",
              editor.isActive("code") ? "Code" : "",
            ]}
            variant="outline"
          >
            <ToggleGroupItem
              aria-label="Toggle blockquote"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              size="sm"
              value="Blockquote"
              variant="outline"
            >
              <IconQuote className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Add horizontal line"
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              size="sm"
              value="Horizontal Line"
              variant="outline"
            >
              <IconSeparatorHorizontal className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle bulleted list"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              size="sm"
              value="Bulleted List"
              variant="outline"
            >
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle ordered list"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              size="sm"
              value="Ordered List"
              variant="outline"
            >
              <ListOrderedIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle checkbox"
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              size="sm"
              value="Checkbox"
              variant="outline"
            >
              <IconCheckbox className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle subscript"
              onClick={() => {
                editor.chain().focus().toggleSubscript().run();
              }}
              size="sm"
              value="Subscript"
              variant="outline"
            >
              <SubscriptIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle superscript"
              onClick={() => {
                editor.chain().focus().toggleSuperscript().run();
              }}
              size="sm"
              value="Superscript"
              variant="outline"
            >
              <SuperscriptIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle code"
              onClick={() => editor.chain().focus().toggleCode().run()}
              size="sm"
              value="Code"
              variant="outline"
            >
              <CodeIcon className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            type="multiple"
            value={[
              editor.isActive({ textAlign: "left" }) ? "Left" : "",
              editor.isActive({ textAlign: "center" }) ? "Center" : "",
              editor.isActive({ textAlign: "justify" }) ? "Justify" : "",
              editor.isActive({ textAlign: "right" }) ? "Right" : "",
            ]}
            variant="outline"
          >
            <ToggleGroupItem
              aria-label="Align left"
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              size="sm"
              value="Left"
              variant="outline"
            >
              <IconAlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Align center"
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              size="sm"
              value="Center"
              variant="outline"
            >
              <IconAlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Align justify"
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              size="sm"
              value="Justify"
              variant="outline"
            >
              <IconAlignJustified className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Align right"
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              size="sm"
              value="Right"
              variant="outline"
            >
              <IconAlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <Separator className="w-full" />
    </div>
  );
}

export function TipTap(
  props: Partial<EditorProviderProps & { className?: string }>,
): React.ReactElement {
  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    // @ts-expect-error -- idk but its fine
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    Typography,
    Underline,
    Blockquote,
    OrderedList,
    Subscript,
    Superscript,
    TaskList,
    TaskItem,
    TextAlign,
    Code,
  ];
  const testContent = "<p>Hello, World!</p>";

  return (
    <Card
      className={cn(
        "transition-[border-color] focus-within:border-accent-foreground",
        props.className,
      )}
    >
      <EditorProvider
        content={testContent}
        extensions={extensions}
        slotBefore={<MenuBar />}
        {...props}
      >
        {}
        {/* eslint-disable-next-line react/jsx-no-useless-fragment -- These are placeholders */}
        <></>
        {/* <FloatingMenu>This is the floating menu</FloatingMenu> */}
        {/* <BubbleMenu>
          <Card className='w-max p-2 rounded-md'>
            <CardContent className='w-max h-max p-0 space-x-1'>
              <Toggle
                size={'sm'}
                aria-label='Toggle bold'
                // onClick={() => editor?.chain().focus().toggleBold().run()}
                // pressed={editor.isActive('bold')}
              >
                <FontBoldIcon className='w-4 h-4' />
              </Toggle>
              <Toggle
                size={'sm'}
                aria-label='Toggle italic'
                // onClick={() => editor?.chain().focus().toggleItalic().run()}
                // pressed={editor.isActive('italic')}
              >
                <FontItalicIcon className='w-4 h-4' />
              </Toggle>
              <Toggle
                size={'sm'}
                aria-label='Toggle strikethrough'
                // onClick={() => editor?.chain().focus().toggleStrike().run()}
                // pressed={editor.isActive('strike')}
              >
                <StrikethroughIcon className='w-4 h-4' />
              </Toggle>
            </CardContent>
          </Card>
        </BubbleMenu> */}
      </EditorProvider>
    </Card>
  );
}

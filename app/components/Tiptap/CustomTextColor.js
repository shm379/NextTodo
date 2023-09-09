// CustomTextColor.js
import { Extension } from '@tiptap/core';

export default Extension.create({
    name: 'customTextColor',

    addProseMirrorPlugins() {
        return [
            {
                props: {
                    attributes: {
                        style: 'color', // اضافه کردن ویژگی رنگ به متن
                    },
                },
            },
        ];
    },
});

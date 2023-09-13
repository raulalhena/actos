// import { tagsInputProps } from '@/app/interfaces/tagsInputProps';
// import { useState } from 'react';
// import { TagsInput } from 'react-tag-input-component';

// const TagInput = (props: tagsInputProps) => {
//     const { label,  id, maxLength, onChange } = props;

//     const [ tags, setTags ] = useState<string[]>([]);

//     const handleTagsChange = (tags: string[]) => {
//         setTags(tags);
//         if (onChange) {
//             onChange(tags);
//         }
//     };
//     return (
//         <>
//             <label htmlFor={id}>{label}</label>
//             <TagsInput
//                 id={id} 
//                 maxLength={maxLength}
//                 value={tags}
//                 onChange={handleTagsChange}
//             />
//         </>
//     );
// };

// export default TagInput;
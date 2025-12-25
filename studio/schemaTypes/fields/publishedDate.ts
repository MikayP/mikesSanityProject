import { defineField } from 'sanity';

export const publishedDateField = defineField({
    name: 'publishedDate',
    title: 'Published Date',
    type: 'datetime',
    description: 'The date and time when the content was published.',
    validation: (Rule) => Rule.required(),
});
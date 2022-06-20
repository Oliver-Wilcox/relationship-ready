export default {
	name: "personThree",
	title: "Person Three Experience",
	type: "document",
	fields: [
		{
			name: "Name",
			title: "Name",
			type: "string"
		},
		{
			name: "personThreeTitle",
			title: "Title",
			type: "string",
			description: "Title For Person Three Section",
			options: {
				maxLength: 100
			}
		},
		{
			name: "personThreeImage",
			title: "Person Three Image",
			description: "Image 1 out of 1",
			type: "image"
		},
		{
			name: "personThreeParagraphTextOne",
			title: "Paragraph 1",
			type: "string",
			description: "Paragraph 1 Out Of 3",
			options: {
				maxLength: 100
			}
		},

		{
			name: "personThreeParagraphTextTwo",
			title: "Paragraph 2",
			type: "string",
			description: "Paragraph 2 Out Of 3",
			options: {
				maxLength: 100
			}
		},
		{
			name: "personThreeParagraphTextThree",
			title: "Paragraph 2",
			type: "string",
			description: "Paragraph 3 Out Of 3",
			options: {
				maxLength: 100
			}
		},
		{
			name: "personOneName",
			title: "Person 1 Name",
			type: "string",
			description: "Paragraph 3 Out Of 3",
			options: {
				maxLength: 100
			}
		},
		{
			name: "personOneImage",
			title: "Person One Image",
			description: "Image 2 out of 3",
			type: "image"
		},
		{
			name: "personTwoName",
			title: "Person 2 Name",
			type: "string",
			description: "Paragraph 3 Out Of 3",
			options: {
				maxLength: 100
			}
		},
		{
			name: "personTwoImage",
			title: "Person Two Image",
			description: "Image 3 out of 3",
			type: "image"
		},

		{
			name: "vimeoUrl",
			title: "Vimeo Url",
			type: "string",
			description: "The URL for the third person"
		}
	]
};

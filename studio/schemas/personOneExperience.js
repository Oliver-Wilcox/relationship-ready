export default {
	name: "personOne",
	title: "Person One Experience",
	type: "document",
	fields: [
		{
			name: "Name",
			title: "Name",
			type: "string"
		},
		{
			name: "personOneTitle",
			title: "Title",
			type: "string",
			description: "Title For Person One Section",
			options: {
				maxLength: 100
			}
		},
		{
			name: "personOneImage",
			title: "Person One Image",
			description: "Image 1 out of 1",
			type: "image"
		},
		{
			name: "personOneParagraphTextOne",
			title: "Paragraph 1",
			type: "string",
			description: "Paragraph 1 Out Of 3",
			options: {
				maxLength: 100
			}
		},

		{
			name: "personOneParagraphTextTwo",
			title: "Paragraph 2",
			type: "string",
			description: "Paragraph 2 Out Of 3",
			options: {
				maxLength: 100
			}
		},
		{
			name: "personOneParagraphTextThree",
			title: "Paragraph 3",
			type: "string",
			description: "Paragraph 3 Out Of 3",
			options: {
				maxLength: 100
			}
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
			description: "Image 2 out of 3",
			type: "image"
		},

		{
			name: "personThreeName",
			title: "Person 3 Name",
			type: "string",
			description: "Paragraph 3 Out Of 3",
			options: {
				maxLength: 100
			}
		},
		{
			name: "personThreeImage",
			title: "Person Three Image",
			description: "Image 3 out of 3",
			type: "image"
		},

		{
			name: "vimeoUrl",
			title: "Vimeo Url",
			type: "string",
			description: "The URL for the first person"
		}
	]
};

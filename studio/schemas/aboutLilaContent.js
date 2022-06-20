export default {
	name: "aboutLilaContent",
	title: "About Lila Section",
	type: "document",
	fields: [
		{
			name: "Name",
			title: "Name",
			type: "string"
		},
		{
			name: "aboutLilaTitle",
			title: "Title",
			type: "string",
			description: "Title For Lila Section",
			options: {
				maxLength: 100
			}
		},
		{
			name: "aboutLilaParagraphTextOne",
			title: "Paragraph 1",
			type: "string",
			description: "Paragraph 1 Out Of 3",
			options: {
				maxLength: 100
			}
		},
		{
			name: "vimeoUrl",
			title: "Vimeo Url",
			type: "string",
			description: "The URL for the Lila Video"
		},
		{
			name: "aboutLilaParagraphTextTwo",
			title: "Paragraph 2",
			type: "string",
			description: "Paragraph 2 Out Of 3",
			options: {
				maxLength: 100
			}
		},
		{
			name: "aboutLilaParagraphTextThree",
			title: "Paragraph 2",
			type: "string",
			description: "Paragraph 3 Out Of 3",
			options: {
				maxLength: 100
			}
		}
	]
};

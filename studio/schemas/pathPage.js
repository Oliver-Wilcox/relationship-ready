export default {
	name: "pathPage",
	title: "Path Page",
	type: "document",
	fields: [
		{
			name: "Name",
			title: "Name",
			type: "string",
			description: "The title for the path section"
		},
		{
			name: "pathTitle",
			title: "Title",
			type: "string",
			description: "Path Title",
			options: {
				maxLength: 40
			}
		},
		{
			name: "pathParagraphOne",
			title: "Paragraph One",
			type: "string",
			description: "1 Out Of 2",
			options: {
				maxLength: 200
			}
		},
		{
			name: "pathParagraphTwo",
			title: "Paragraph Two",
			type: "string",
			description: "2 Out Of 2",
			options: {
				maxLength: 200
			}
		}
	]
};

/// <reference path="parser.ts"/>
/// <reference path="factory.ts"/>

module ts {
    export module Factory {
        export function createStringLiteral(text: string, location?: TextRange, flags?: NodeFlags): StringLiteralExpression {
            var node = beginNode<StringLiteralExpression>(SyntaxKind.StringLiteral);
            node.text = text;
            return finishNode(node, location, flags);
        }

        export function createNumericLiteral(value: number | string, location?: TextRange, flags?: NodeFlags): LiteralExpression {
            var node = beginNode<LiteralExpression>(SyntaxKind.NumericLiteral);
            node.text = String(value);
            return finishNode(node, location, flags);
        }

        export function createIdentifier(text: string, location?: TextRange, flags?: NodeFlags): Identifier {
            var node = beginNode<Identifier>(SyntaxKind.Identifier);
            node.text = text;
            return finishNode(node, location, flags);
        }

        export function createQualifiedName(left: EntityName, right: Identifier, location?: TextRange, flags?: NodeFlags): QualifiedName {
            var node = beginNode<QualifiedName>(SyntaxKind.QualifiedName);
            node.left = left;
            node.right = right;
            return finishNode(node, location, flags);
        }

        export function updateQualifiedName(node: QualifiedName, left: EntityName, right: Identifier): QualifiedName {
            if (node.left !== left || node.right !== right) {
                return createQualifiedName(left, right, node, node.flags);
            }
            return node;
        }

        export function createComputedPropertyName(expression: Expression, location?: TextRange, flags?: NodeFlags): ComputedPropertyName {
            var node = beginNode<ComputedPropertyName>(SyntaxKind.ComputedPropertyName);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateComputedPropertyName(node: ComputedPropertyName, expression: Expression): ComputedPropertyName {
            if (node.expression !== expression) {
                return createComputedPropertyName(expression, node, node.flags);
            }
            return node;
        }

        export function createTypeParameter(name: Identifier, constraint?: TypeNode, expression?: Expression, location?: TextRange, flags?: NodeFlags): TypeParameterDeclaration {
            var node = beginNode<TypeParameterDeclaration>(SyntaxKind.TypeParameter);
            node.name = name;
            node.constraint = constraint;
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateTypeParameter(node: TypeParameterDeclaration, name: Identifier, constraint: TypeNode): TypeParameterDeclaration {
            if (node.name !== name || node.constraint !== constraint) {
                return createTypeParameter(name, constraint, node.expression, node, node.flags);
            }
            return node;
        }

        export function createParameterDeclaration(name: BindingPattern | Identifier, initializer?: Expression, type?: TypeNode, modifiers?: Node[], dotDotDotToken?: Node, questionToken?: Node, location?: TextRange, flags?: NodeFlags): ParameterDeclaration {
            var node = beginNode<ParameterDeclaration>(SyntaxKind.Parameter);
            node.name = name;
            node.initializer = initializer;
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            node.dotDotDotToken = dotDotDotToken;
            node.questionToken = questionToken;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateParameterDeclaration(node: ParameterDeclaration, name: BindingPattern | Identifier, initializer: Expression, type: TypeNode): ParameterDeclaration {
            if (node.name !== name || node.initializer !== initializer || node.type !== type) {
                return createParameterDeclaration(name, initializer, type, node.modifiers, node.dotDotDotToken, node.questionToken, node, node.flags);
            }
            return node;
        }

        export function createPropertySignature(name: DeclarationName, type?: TypeNode, questionToken?: Node, location?: TextRange, flags?: NodeFlags): PropertyDeclaration {
            var node = beginNode<PropertyDeclaration>(SyntaxKind.PropertySignature);
            node.name = name;
            node.type = type;
            node.questionToken = questionToken;
            return finishNode(node, location, flags);
        }

        export function updatePropertySignature(node: PropertyDeclaration, name: DeclarationName, type: TypeNode): PropertyDeclaration {
            if (node.name !== name || node.type !== type) {
                return createPropertySignature(name, type, node.questionToken, node, node.flags);
            }
            return node;
        }

        export function createPropertyDeclaration(name: DeclarationName, initializer?: Expression, type?: TypeNode, questionToken?: Node, location?: TextRange, flags?: NodeFlags): PropertyDeclaration {
            var node = beginNode<PropertyDeclaration>(SyntaxKind.PropertyDeclaration);
            node.name = name;
            node.initializer = initializer;
            node.type = type;
            node.questionToken = questionToken;
            return finishNode(node, location, flags);
        }

        export function updatePropertyDeclaration(node: PropertyDeclaration, name: DeclarationName, initializer: Expression, type: TypeNode): PropertyDeclaration {
            if (node.name !== name || node.initializer !== initializer || node.type !== type) {
                return createPropertyDeclaration(name, initializer, type, node.questionToken, node, node.flags);
            }
            return node;
        }

        export function createMethodSignature(name: DeclarationName, parameters: ParameterDeclaration[], typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], asteriskToken?: Node, questionToken?: Node, location?: TextRange, flags?: NodeFlags): MethodDeclaration {
            var node = beginNode<MethodDeclaration>(SyntaxKind.MethodSignature);
            node.name = name;
            node.parameters = createNodeArray(parameters);
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            node.asteriskToken = asteriskToken;
            node.questionToken = questionToken;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateMethodSignature(node: MethodDeclaration, name: DeclarationName, parameters: ParameterDeclaration[]): MethodDeclaration {
            if (node.name !== name || node.parameters !== parameters) {
                return createMethodSignature(name, parameters, node.typeParameters, node.type, node.modifiers, node.asteriskToken, node.questionToken, node, node.flags);
            }
            return node;
        }

        export function createMethodDeclaration(name: DeclarationName, parameters: ParameterDeclaration[], body: Block, typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], asteriskToken?: Node, location?: TextRange, flags?: NodeFlags): MethodDeclaration {
            var node = beginNode<MethodDeclaration>(SyntaxKind.MethodDeclaration);
            node.name = name;
            node.parameters = createNodeArray(parameters);
            node.body = body;
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            node.asteriskToken = asteriskToken;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateMethodDeclaration(node: MethodDeclaration, name: DeclarationName, parameters: ParameterDeclaration[], body: Block): MethodDeclaration {
            if (node.name !== name || node.parameters !== parameters || node.body !== body) {
                return createMethodDeclaration(name, parameters, body, node.typeParameters, node.type, node.modifiers, node.asteriskToken, node, node.flags);
            }
            return node;
        }

        export function createConstructor(parameters: ParameterDeclaration[], body: Block, typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], location?: TextRange, flags?: NodeFlags): ConstructorDeclaration {
            var node = beginNode<ConstructorDeclaration>(SyntaxKind.Constructor);
            node.parameters = createNodeArray(parameters);
            node.body = body;
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateConstructor(node: ConstructorDeclaration, parameters: ParameterDeclaration[], body: Block): ConstructorDeclaration {
            if (node.parameters !== parameters || node.body !== body) {
                return createConstructor(parameters, body, node.typeParameters, node.type, node.modifiers, node, node.flags);
            }
            return node;
        }

        export function createGetAccessor(name: DeclarationName, parameters: ParameterDeclaration[], body: Block, typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], location?: TextRange, flags?: NodeFlags): AccessorDeclaration {
            var node = beginNode<AccessorDeclaration>(SyntaxKind.GetAccessor);
            node.name = name;
            node.parameters = createNodeArray(parameters);
            node.body = body;
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateGetAccessor(node: AccessorDeclaration, name: DeclarationName, parameters: ParameterDeclaration[], body: Block): AccessorDeclaration {
            if (node.name !== name || node.parameters !== parameters || node.body !== body) {
                return createGetAccessor(name, parameters, body, node.typeParameters, node.type, node.modifiers, node, node.flags);
            }
            return node;
        }

        export function createSetAccessor(name: DeclarationName, parameters: ParameterDeclaration[], body: Block, typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], location?: TextRange, flags?: NodeFlags): AccessorDeclaration {
            var node = beginNode<AccessorDeclaration>(SyntaxKind.SetAccessor);
            node.name = name;
            node.parameters = createNodeArray(parameters);
            node.body = body;
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateSetAccessor(node: AccessorDeclaration, name: DeclarationName, parameters: ParameterDeclaration[], body: Block): AccessorDeclaration {
            if (node.name !== name || node.parameters !== parameters || node.body !== body) {
                return createSetAccessor(name, parameters, body, node.typeParameters, node.type, node.modifiers, node, node.flags);
            }
            return node;
        }

        export function createCallSignature(parameters: ParameterDeclaration[], typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], location?: TextRange, flags?: NodeFlags): SignatureDeclaration {
            var node = beginNode<SignatureDeclaration>(SyntaxKind.CallSignature);
            node.parameters = createNodeArray(parameters);
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateCallSignature(node: SignatureDeclaration, parameters: ParameterDeclaration[]): SignatureDeclaration {
            if (node.parameters !== parameters) {
                return createCallSignature(parameters, node.typeParameters, node.type, node.modifiers, node, node.flags);
            }
            return node;
        }

        export function createConstructSignature(parameters: ParameterDeclaration[], typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], location?: TextRange, flags?: NodeFlags): SignatureDeclaration {
            var node = beginNode<SignatureDeclaration>(SyntaxKind.ConstructSignature);
            node.parameters = createNodeArray(parameters);
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateConstructSignature(node: SignatureDeclaration, parameters: ParameterDeclaration[]): SignatureDeclaration {
            if (node.parameters !== parameters) {
                return createConstructSignature(parameters, node.typeParameters, node.type, node.modifiers, node, node.flags);
            }
            return node;
        }

        export function createIndexSignature(parameters: ParameterDeclaration[], typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], location?: TextRange, flags?: NodeFlags): IndexSignatureDeclaration {
            var node = beginNode<IndexSignatureDeclaration>(SyntaxKind.IndexSignature);
            node.parameters = createNodeArray(parameters);
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateIndexSignature(node: IndexSignatureDeclaration, parameters: ParameterDeclaration[]): IndexSignatureDeclaration {
            if (node.parameters !== parameters) {
                return createIndexSignature(parameters, node.typeParameters, node.type, node.modifiers, node, node.flags);
            }
            return node;
        }

        export function createObjectBindingPattern(elements: BindingElement[], location?: TextRange, flags?: NodeFlags): BindingPattern {
            var node = beginNode<BindingPattern>(SyntaxKind.ObjectBindingPattern);
            node.elements = createNodeArray(elements);
            return finishNode(node, location, flags);
        }

        export function updateObjectBindingPattern(node: BindingPattern, elements: BindingElement[]): BindingPattern {
            if (node.elements !== elements) {
                return createObjectBindingPattern(elements, node, node.flags);
            }
            return node;
        }

        export function createArrayBindingPattern(elements: BindingElement[], location?: TextRange, flags?: NodeFlags): BindingPattern {
            var node = beginNode<BindingPattern>(SyntaxKind.ArrayBindingPattern);
            node.elements = createNodeArray(elements);
            return finishNode(node, location, flags);
        }

        export function updateArrayBindingPattern(node: BindingPattern, elements: BindingElement[]): BindingPattern {
            if (node.elements !== elements) {
                return createArrayBindingPattern(elements, node, node.flags);
            }
            return node;
        }

        export function createBindingElement(name: BindingPattern | Identifier, propertyName?: Identifier, initializer?: Expression, location?: TextRange, flags?: NodeFlags): BindingElement {
            var node = beginNode<BindingElement>(SyntaxKind.BindingElement);
            node.name = name;
            node.propertyName = propertyName;
            node.initializer = initializer;
            return finishNode(node, location, flags);
        }

        export function updateBindingElement(node: BindingElement, name: BindingPattern | Identifier, propertyName: Identifier, initializer: Expression): BindingElement {
            if (node.name !== name || node.propertyName !== propertyName || node.initializer !== initializer) {
                return createBindingElement(name, propertyName, initializer, node, node.flags);
            }
            return node;
        }

        export function createArrayLiteralExpression(elements: Expression[], location?: TextRange, flags?: NodeFlags): ArrayLiteralExpression {
            var node = beginNode<ArrayLiteralExpression>(SyntaxKind.ArrayLiteralExpression);
            node.elements = createNodeArray(elements);
            return finishNode(node, location, flags);
        }

        export function updateArrayLiteralExpression(node: ArrayLiteralExpression, elements: Expression[]): ArrayLiteralExpression {
            if (node.elements !== elements) {
                return createArrayLiteralExpression(elements, node, node.flags);
            }
            return node;
        }

        export function createObjectLiteralExpression(properties: ObjectLiteralElement[], location?: TextRange, flags?: NodeFlags): ObjectLiteralExpression {
            var node = beginNode<ObjectLiteralExpression>(SyntaxKind.ObjectLiteralExpression);
            node.properties = createNodeArray(properties);
            return finishNode(node, location, flags);
        }

        export function updateObjectLiteralExpression(node: ObjectLiteralExpression, properties: ObjectLiteralElement[]): ObjectLiteralExpression {
            if (node.properties !== properties) {
                return createObjectLiteralExpression(properties, node, node.flags);
            }
            return node;
        }

        export function createPropertyAccessExpression(expression: LeftHandSideExpression, name: Identifier, location?: TextRange, flags?: NodeFlags): PropertyAccessExpression {
            var node = beginNode<PropertyAccessExpression>(SyntaxKind.PropertyAccessExpression);
            node.expression = expression;
            node.name = name;
            return finishNode(node, location, flags);
        }

        export function updatePropertyAccessExpression(node: PropertyAccessExpression, expression: LeftHandSideExpression, name: Identifier): PropertyAccessExpression {
            if (node.expression !== expression || node.name !== name) {
                return createPropertyAccessExpression(expression, name, node, node.flags);
            }
            return node;
        }

        export function createElementAccessExpression(expression: LeftHandSideExpression, argumentExpression: Expression, location?: TextRange, flags?: NodeFlags): ElementAccessExpression {
            var node = beginNode<ElementAccessExpression>(SyntaxKind.ElementAccessExpression);
            node.expression = expression;
            node.argumentExpression = argumentExpression;
            return finishNode(node, location, flags);
        }

        export function updateElementAccessExpression(node: ElementAccessExpression, expression: LeftHandSideExpression, argumentExpression: Expression): ElementAccessExpression {
            if (node.expression !== expression || node.argumentExpression !== argumentExpression) {
                return createElementAccessExpression(expression, argumentExpression, node, node.flags);
            }
            return node;
        }

        export function createCallExpression(expression: LeftHandSideExpression, arguments: Expression[], location?: TextRange, flags?: NodeFlags): CallExpression {
            var node = beginNode<CallExpression>(SyntaxKind.CallExpression);
            node.expression = expression;
            node.arguments = createNodeArray(arguments);
            return finishNode(node, location, flags);
        }

        export function updateCallExpression(node: CallExpression, expression: LeftHandSideExpression, arguments: Expression[]): CallExpression {
            if (node.expression !== expression || node.arguments !== arguments) {
                return createCallExpression(expression, arguments, node, node.flags);
            }
            return node;
        }

        export function createNewExpression(expression: LeftHandSideExpression, arguments: Expression[], location?: TextRange, flags?: NodeFlags): NewExpression {
            var node = beginNode<NewExpression>(SyntaxKind.NewExpression);
            node.expression = expression;
            node.arguments = createNodeArray(arguments);
            return finishNode(node, location, flags);
        }

        export function updateNewExpression(node: NewExpression, expression: LeftHandSideExpression, arguments: Expression[]): NewExpression {
            if (node.expression !== expression || node.arguments !== arguments) {
                return createNewExpression(expression, arguments, node, node.flags);
            }
            return node;
        }

        export function createTaggedTemplateExpression(tag: LeftHandSideExpression, template: LiteralExpression | TemplateExpression, location?: TextRange, flags?: NodeFlags): TaggedTemplateExpression {
            var node = beginNode<TaggedTemplateExpression>(SyntaxKind.TaggedTemplateExpression);
            node.tag = tag;
            node.template = template;
            return finishNode(node, location, flags);
        }

        export function updateTaggedTemplateExpression(node: TaggedTemplateExpression, tag: LeftHandSideExpression, template: LiteralExpression | TemplateExpression): TaggedTemplateExpression {
            if (node.tag !== tag || node.template !== template) {
                return createTaggedTemplateExpression(tag, template, node, node.flags);
            }
            return node;
        }

        export function createTypeAssertion(type: TypeNode, expression: UnaryExpression, location?: TextRange, flags?: NodeFlags): TypeAssertion {
            var node = beginNode<TypeAssertion>(SyntaxKind.TypeAssertionExpression);
            node.type = type;
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateTypeAssertion(node: TypeAssertion, expression: UnaryExpression): TypeAssertion {
            if (node.expression !== expression) {
                return createTypeAssertion(node.type, expression, node, node.flags);
            }
            return node;
        }

        export function createParenthesizedExpression(expression: Expression, location?: TextRange, flags?: NodeFlags): ParenthesizedExpression {
            var node = beginNode<ParenthesizedExpression>(SyntaxKind.ParenthesizedExpression);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateParenthesizedExpression(node: ParenthesizedExpression, expression: Expression): ParenthesizedExpression {
            if (node.expression !== expression) {
                return createParenthesizedExpression(expression, node, node.flags);
            }
            return node;
        }

        export function createFunctionExpression(name: Identifier, parameters: ParameterDeclaration[], body: Block | Expression, typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], asteriskToken?: Node, location?: TextRange, flags?: NodeFlags): FunctionExpression {
            var node = beginNode<FunctionExpression>(SyntaxKind.FunctionExpression);
            node.name = name;
            node.parameters = createNodeArray(parameters);
            node.body = body;
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            node.asteriskToken = asteriskToken;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateFunctionExpression(node: FunctionExpression, name: Identifier, parameters: ParameterDeclaration[], body: Block | Expression): FunctionExpression {
            if (node.name !== name || node.parameters !== parameters || node.body !== body) {
                return createFunctionExpression(name, parameters, body, node.typeParameters, node.type, node.modifiers, node.asteriskToken, node, node.flags);
            }
            return node;
        }

        export function createArrowFunction(parameters: ParameterDeclaration[], body: Block | Expression, typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], location?: TextRange, flags?: NodeFlags): FunctionExpression {
            var node = beginNode<FunctionExpression>(SyntaxKind.ArrowFunction);
            node.parameters = createNodeArray(parameters);
            node.body = body;
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateArrowFunction(node: FunctionExpression, parameters: ParameterDeclaration[], body: Block | Expression): FunctionExpression {
            if (node.parameters !== parameters || node.body !== body) {
                return createArrowFunction(parameters, body, node.typeParameters, node.type, node.modifiers, node, node.flags);
            }
            return node;
        }

        export function createDeleteExpression(expression: UnaryExpression, location?: TextRange, flags?: NodeFlags): DeleteExpression {
            var node = beginNode<DeleteExpression>(SyntaxKind.DeleteExpression);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateDeleteExpression(node: DeleteExpression, expression: UnaryExpression): DeleteExpression {
            if (node.expression !== expression) {
                return createDeleteExpression(expression, node, node.flags);
            }
            return node;
        }

        export function createTypeOfExpression(expression: UnaryExpression, location?: TextRange, flags?: NodeFlags): TypeOfExpression {
            var node = beginNode<TypeOfExpression>(SyntaxKind.TypeOfExpression);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateTypeOfExpression(node: TypeOfExpression, expression: UnaryExpression): TypeOfExpression {
            if (node.expression !== expression) {
                return createTypeOfExpression(expression, node, node.flags);
            }
            return node;
        }

        export function createVoidExpression(expression: UnaryExpression, location?: TextRange, flags?: NodeFlags): VoidExpression {
            var node = beginNode<VoidExpression>(SyntaxKind.VoidExpression);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateVoidExpression(node: VoidExpression, expression: UnaryExpression): VoidExpression {
            if (node.expression !== expression) {
                return createVoidExpression(expression, node, node.flags);
            }
            return node;
        }

        export function createAwaitExpression(expression: UnaryExpression, location?: TextRange, flags?: NodeFlags): AwaitExpression {
            var node = beginNode<AwaitExpression>(SyntaxKind.AwaitExpression);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateAwaitExpression(node: AwaitExpression, expression: UnaryExpression): AwaitExpression {
            if (node.expression !== expression) {
                return createAwaitExpression(expression, node, node.flags);
            }
            return node;
        }

        export function createPrefixUnaryExpression(operator: SyntaxKind, operand: UnaryExpression, location?: TextRange, flags?: NodeFlags): PrefixUnaryExpression {
            var node = beginNode<PrefixUnaryExpression>(SyntaxKind.PrefixUnaryExpression);
            node.operator = operator;
            node.operand = operand;
            return finishNode(node, location, flags);
        }

        export function updatePrefixUnaryExpression(node: PrefixUnaryExpression, operand: UnaryExpression): PrefixUnaryExpression {
            if (node.operand !== operand) {
                return createPrefixUnaryExpression(node.operator, operand, node, node.flags);
            }
            return node;
        }

        export function createPostfixUnaryExpression(operator: SyntaxKind, operand: LeftHandSideExpression, location?: TextRange, flags?: NodeFlags): PostfixUnaryExpression {
            var node = beginNode<PostfixUnaryExpression>(SyntaxKind.PostfixUnaryExpression);
            node.operator = operator;
            node.operand = operand;
            return finishNode(node, location, flags);
        }

        export function updatePostfixUnaryExpression(node: PostfixUnaryExpression, operand: LeftHandSideExpression): PostfixUnaryExpression {
            if (node.operand !== operand) {
                return createPostfixUnaryExpression(node.operator, operand, node, node.flags);
            }
            return node;
        }

        export function createBinaryExpression(operator: SyntaxKind, left: Expression, right: Expression, location?: TextRange, flags?: NodeFlags): BinaryExpression {
            var node = beginNode<BinaryExpression>(SyntaxKind.BinaryExpression);
            node.operator = operator;
            node.left = left;
            node.right = right;
            return finishNode(node, location, flags);
        }

        export function updateBinaryExpression(node: BinaryExpression, left: Expression, right: Expression): BinaryExpression {
            if (node.left !== left || node.right !== right) {
                return createBinaryExpression(node.operator, left, right, node, node.flags);
            }
            return node;
        }

        export function createConditionalExpression(condition: Expression, whenTrue: Expression, whenFalse: Expression, location?: TextRange, flags?: NodeFlags): ConditionalExpression {
            var node = beginNode<ConditionalExpression>(SyntaxKind.ConditionalExpression);
            node.condition = condition;
            node.whenTrue = whenTrue;
            node.whenFalse = whenFalse;
            return finishNode(node, location, flags);
        }

        export function updateConditionalExpression(node: ConditionalExpression, condition: Expression, whenTrue: Expression, whenFalse: Expression): ConditionalExpression {
            if (node.condition !== condition || node.whenTrue !== whenTrue || node.whenFalse !== whenFalse) {
                return createConditionalExpression(condition, whenTrue, whenFalse, node, node.flags);
            }
            return node;
        }

        export function createTemplateExpression(head: LiteralExpression, templateSpans: TemplateSpan[], location?: TextRange, flags?: NodeFlags): TemplateExpression {
            var node = beginNode<TemplateExpression>(SyntaxKind.TemplateExpression);
            node.head = head;
            node.templateSpans = createNodeArray(templateSpans);
            return finishNode(node, location, flags);
        }

        export function updateTemplateExpression(node: TemplateExpression, head: LiteralExpression, templateSpans: TemplateSpan[]): TemplateExpression {
            if (node.head !== head || node.templateSpans !== templateSpans) {
                return createTemplateExpression(head, templateSpans, node, node.flags);
            }
            return node;
        }

        export function createYieldExpression(expression: Expression, asteriskToken?: Node, location?: TextRange, flags?: NodeFlags): YieldExpression {
            var node = beginNode<YieldExpression>(SyntaxKind.YieldExpression);
            node.expression = expression;
            node.asteriskToken = asteriskToken;
            return finishNode(node, location, flags);
        }

        export function updateYieldExpression(node: YieldExpression, expression: Expression): YieldExpression {
            if (node.expression !== expression) {
                return createYieldExpression(expression, node.asteriskToken, node, node.flags);
            }
            return node;
        }

        export function createGeneratedLabel(label: Label, labelNumbers: number[], location?: TextRange, flags?: NodeFlags): GeneratedLabel {
            var node = beginNode<GeneratedLabel>(SyntaxKind.GeneratedLabel);
            node.label = label;
            node.labelNumbers = labelNumbers;
            return finishNode(node, location, flags);
        }

        export function createSpreadElementExpression(expression: Expression, location?: TextRange, flags?: NodeFlags): SpreadElementExpression {
            var node = beginNode<SpreadElementExpression>(SyntaxKind.SpreadElementExpression);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateSpreadElementExpression(node: SpreadElementExpression, expression: Expression): SpreadElementExpression {
            if (node.expression !== expression) {
                return createSpreadElementExpression(expression, node, node.flags);
            }
            return node;
        }

        export function createOmittedExpression(location?: TextRange, flags?: NodeFlags): Expression {
            var node = beginNode<Expression>(SyntaxKind.OmittedExpression);
            return finishNode(node, location, flags);
        }

        export function createTemplateSpan(expression: Expression, literal: LiteralExpression, location?: TextRange, flags?: NodeFlags): TemplateSpan {
            var node = beginNode<TemplateSpan>(SyntaxKind.TemplateSpan);
            node.expression = expression;
            node.literal = literal;
            return finishNode(node, location, flags);
        }

        export function updateTemplateSpan(node: TemplateSpan, expression: Expression, literal: LiteralExpression): TemplateSpan {
            if (node.expression !== expression || node.literal !== literal) {
                return createTemplateSpan(expression, literal, node, node.flags);
            }
            return node;
        }

        export function createBlock(statements: Statement[], location?: TextRange, flags?: NodeFlags): Block {
            var node = beginNode<Block>(SyntaxKind.Block);
            node.statements = createNodeArray(statements);
            return finishNode(node, location, flags);
        }

        export function updateBlock(node: Block, statements: Statement[]): Block {
            if (node.statements !== statements) {
                return createBlock(statements, node, node.flags);
            }
            return node;
        }

        export function createVariableStatement(declarationList: VariableDeclarationList, location?: TextRange, flags?: NodeFlags): VariableStatement {
            var node = beginNode<VariableStatement>(SyntaxKind.VariableStatement);
            node.declarationList = declarationList;
            return finishNode(node, location, flags);
        }

        export function updateVariableStatement(node: VariableStatement, declarationList: VariableDeclarationList): VariableStatement {
            if (node.declarationList !== declarationList) {
                return createVariableStatement(declarationList, node, node.flags);
            }
            return node;
        }

        export function createEmptyStatement(location?: TextRange, flags?: NodeFlags): Statement {
            var node = beginNode<Statement>(SyntaxKind.EmptyStatement);
            return finishNode(node, location, flags);
        }

        export function createExpressionStatement(expression: Expression, location?: TextRange, flags?: NodeFlags): ExpressionStatement {
            var node = beginNode<ExpressionStatement>(SyntaxKind.ExpressionStatement);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateExpressionStatement(node: ExpressionStatement, expression: Expression): ExpressionStatement {
            if (node.expression !== expression) {
                return createExpressionStatement(expression, node, node.flags);
            }
            return node;
        }

        export function createIfStatement(expression: Expression, thenStatement: Statement, elseStatement?: Statement, location?: TextRange, flags?: NodeFlags): IfStatement {
            var node = beginNode<IfStatement>(SyntaxKind.IfStatement);
            node.expression = expression;
            node.thenStatement = thenStatement;
            node.elseStatement = elseStatement;
            return finishNode(node, location, flags);
        }

        export function updateIfStatement(node: IfStatement, expression: Expression, thenStatement: Statement, elseStatement: Statement): IfStatement {
            if (node.expression !== expression || node.thenStatement !== thenStatement || node.elseStatement !== elseStatement) {
                return createIfStatement(expression, thenStatement, elseStatement, node, node.flags);
            }
            return node;
        }

        export function createDoStatement(statement: Statement, expression: Expression, location?: TextRange, flags?: NodeFlags): DoStatement {
            var node = beginNode<DoStatement>(SyntaxKind.DoStatement);
            node.statement = statement;
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateDoStatement(node: DoStatement, statement: Statement, expression: Expression): DoStatement {
            if (node.statement !== statement || node.expression !== expression) {
                return createDoStatement(statement, expression, node, node.flags);
            }
            return node;
        }

        export function createWhileStatement(expression: Expression, statement: Statement, location?: TextRange, flags?: NodeFlags): WhileStatement {
            var node = beginNode<WhileStatement>(SyntaxKind.WhileStatement);
            node.expression = expression;
            node.statement = statement;
            return finishNode(node, location, flags);
        }

        export function updateWhileStatement(node: WhileStatement, expression: Expression, statement: Statement): WhileStatement {
            if (node.expression !== expression || node.statement !== statement) {
                return createWhileStatement(expression, statement, node, node.flags);
            }
            return node;
        }

        export function createForStatement(initializer: Expression | VariableDeclarationList, condition: Expression, iterator: Expression, statement: Statement, location?: TextRange, flags?: NodeFlags): ForStatement {
            var node = beginNode<ForStatement>(SyntaxKind.ForStatement);
            node.initializer = initializer;
            node.condition = condition;
            node.iterator = iterator;
            node.statement = statement;
            return finishNode(node, location, flags);
        }

        export function updateForStatement(node: ForStatement, initializer: Expression | VariableDeclarationList, condition: Expression, iterator: Expression, statement: Statement): ForStatement {
            if (node.initializer !== initializer || node.condition !== condition || node.iterator !== iterator || node.statement !== statement) {
                return createForStatement(initializer, condition, iterator, statement, node, node.flags);
            }
            return node;
        }

        export function createForInStatement(initializer: Expression | VariableDeclarationList, expression: Expression, statement: Statement, location?: TextRange, flags?: NodeFlags): ForInStatement {
            var node = beginNode<ForInStatement>(SyntaxKind.ForInStatement);
            node.initializer = initializer;
            node.expression = expression;
            node.statement = statement;
            return finishNode(node, location, flags);
        }

        export function updateForInStatement(node: ForInStatement, initializer: Expression | VariableDeclarationList, expression: Expression, statement: Statement): ForInStatement {
            if (node.initializer !== initializer || node.expression !== expression || node.statement !== statement) {
                return createForInStatement(initializer, expression, statement, node, node.flags);
            }
            return node;
        }

        export function createContinueStatement(label: Identifier, location?: TextRange, flags?: NodeFlags): BreakOrContinueStatement {
            var node = beginNode<BreakOrContinueStatement>(SyntaxKind.ContinueStatement);
            node.label = label;
            return finishNode(node, location, flags);
        }

        export function createBreakStatement(label: Identifier, location?: TextRange, flags?: NodeFlags): BreakOrContinueStatement {
            var node = beginNode<BreakOrContinueStatement>(SyntaxKind.BreakStatement);
            node.label = label;
            return finishNode(node, location, flags);
        }

        export function createReturnStatement(expression: Expression, location?: TextRange, flags?: NodeFlags): ReturnStatement {
            var node = beginNode<ReturnStatement>(SyntaxKind.ReturnStatement);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateReturnStatement(node: ReturnStatement, expression: Expression): ReturnStatement {
            if (node.expression !== expression) {
                return createReturnStatement(expression, node, node.flags);
            }
            return node;
        }

        export function createWithStatement(expression: Expression, statement: Statement, location?: TextRange, flags?: NodeFlags): WithStatement {
            var node = beginNode<WithStatement>(SyntaxKind.WithStatement);
            node.expression = expression;
            node.statement = statement;
            return finishNode(node, location, flags);
        }

        export function updateWithStatement(node: WithStatement, expression: Expression, statement: Statement): WithStatement {
            if (node.expression !== expression || node.statement !== statement) {
                return createWithStatement(expression, statement, node, node.flags);
            }
            return node;
        }

        export function createSwitchStatement(expression: Expression, clauses: CaseOrDefaultClause[], location?: TextRange, flags?: NodeFlags): SwitchStatement {
            var node = beginNode<SwitchStatement>(SyntaxKind.SwitchStatement);
            node.expression = expression;
            node.clauses = createNodeArray(clauses);
            return finishNode(node, location, flags);
        }

        export function updateSwitchStatement(node: SwitchStatement, expression: Expression, clauses: CaseOrDefaultClause[]): SwitchStatement {
            if (node.expression !== expression || node.clauses !== clauses) {
                return createSwitchStatement(expression, clauses, node, node.flags);
            }
            return node;
        }

        export function createLabeledStatement(label: Identifier, statement: Statement, location?: TextRange, flags?: NodeFlags): LabeledStatement {
            var node = beginNode<LabeledStatement>(SyntaxKind.LabeledStatement);
            node.label = label;
            node.statement = statement;
            return finishNode(node, location, flags);
        }

        export function updateLabeledStatement(node: LabeledStatement, label: Identifier, statement: Statement): LabeledStatement {
            if (node.label !== label || node.statement !== statement) {
                return createLabeledStatement(label, statement, node, node.flags);
            }
            return node;
        }

        export function createThrowStatement(expression: Expression, location?: TextRange, flags?: NodeFlags): ThrowStatement {
            var node = beginNode<ThrowStatement>(SyntaxKind.ThrowStatement);
            node.expression = expression;
            return finishNode(node, location, flags);
        }

        export function updateThrowStatement(node: ThrowStatement, expression: Expression): ThrowStatement {
            if (node.expression !== expression) {
                return createThrowStatement(expression, node, node.flags);
            }
            return node;
        }

        export function createTryStatement(tryBlock: Block, catchClause: CatchClause, finallyBlock: Block, location?: TextRange, flags?: NodeFlags): TryStatement {
            var node = beginNode<TryStatement>(SyntaxKind.TryStatement);
            node.tryBlock = tryBlock;
            node.catchClause = catchClause;
            node.finallyBlock = finallyBlock;
            return finishNode(node, location, flags);
        }

        export function updateTryStatement(node: TryStatement, tryBlock: Block, catchClause: CatchClause, finallyBlock: Block): TryStatement {
            if (node.tryBlock !== tryBlock || node.catchClause !== catchClause || node.finallyBlock !== finallyBlock) {
                return createTryStatement(tryBlock, catchClause, finallyBlock, node, node.flags);
            }
            return node;
        }

        export function createDebuggerStatement(location?: TextRange, flags?: NodeFlags): Statement {
            var node = beginNode<Statement>(SyntaxKind.DebuggerStatement);
            return finishNode(node, location, flags);
        }

        export function createVariableDeclaration(name: BindingPattern | Identifier, initializer?: Expression, location?: TextRange, flags?: NodeFlags): VariableDeclaration {
            var node = beginNode<VariableDeclaration>(SyntaxKind.VariableDeclaration);
            node.name = name;
            node.initializer = initializer;
            return finishNode(node, location, flags);
        }

        export function updateVariableDeclaration(node: VariableDeclaration, name: BindingPattern | Identifier, initializer: Expression): VariableDeclaration {
            if (node.name !== name || node.initializer !== initializer) {
                return createVariableDeclaration(name, initializer, node, node.flags);
            }
            return node;
        }

        export function createVariableDeclarationList(declarations: VariableDeclaration[], location?: TextRange, flags?: NodeFlags): VariableDeclarationList {
            var node = beginNode<VariableDeclarationList>(SyntaxKind.VariableDeclarationList);
            node.declarations = createNodeArray(declarations);
            return finishNode(node, location, flags);
        }

        export function updateVariableDeclarationList(node: VariableDeclarationList, declarations: VariableDeclaration[]): VariableDeclarationList {
            if (node.declarations !== declarations) {
                return createVariableDeclarationList(declarations, node, node.flags);
            }
            return node;
        }

        export function createFunctionDeclaration(name: Identifier, parameters: ParameterDeclaration[], body: Block, typeParameters?: TypeParameterDeclaration[], type?: TypeNode, modifiers?: Node[], asteriskToken?: Node, location?: TextRange, flags?: NodeFlags): FunctionDeclaration {
            var node = beginNode<FunctionDeclaration>(SyntaxKind.FunctionDeclaration);
            node.name = name;
            node.parameters = createNodeArray(parameters);
            node.body = body;
            node.typeParameters = createNodeArray(typeParameters);
            node.type = type;
            node.modifiers = <ModifiersArray>modifiers;
            node.asteriskToken = asteriskToken;
            return finishNode(node, location, flags, modifiers);
        }

        export function updateFunctionDeclaration(node: FunctionDeclaration, name: Identifier, parameters: ParameterDeclaration[], body: Block): FunctionDeclaration {
            if (node.name !== name || node.parameters !== parameters || node.body !== body) {
                return createFunctionDeclaration(name, parameters, body, node.typeParameters, node.type, node.modifiers, node.asteriskToken, node, node.flags);
            }
            return node;
        }

        export function createCaseClause(expression: Expression, statements: Statement[], location?: TextRange, flags?: NodeFlags): CaseClause {
            var node = beginNode<CaseClause>(SyntaxKind.CaseClause);
            node.expression = expression;
            node.statements = createNodeArray(statements);
            return finishNode(node, location, flags);
        }

        export function updateCaseClause(node: CaseClause, expression: Expression, statements: Statement[]): CaseClause {
            if (node.expression !== expression || node.statements !== statements) {
                return createCaseClause(expression, statements, node, node.flags);
            }
            return node;
        }

        export function createDefaultClause(statements: Statement[], location?: TextRange, flags?: NodeFlags): DefaultClause {
            var node = beginNode<DefaultClause>(SyntaxKind.DefaultClause);
            node.statements = createNodeArray(statements);
            return finishNode(node, location, flags);
        }

        export function updateDefaultClause(node: DefaultClause, statements: Statement[]): DefaultClause {
            if (node.statements !== statements) {
                return createDefaultClause(statements, node, node.flags);
            }
            return node;
        }

        export function createCatchClause(name: Identifier, block: Block, location?: TextRange, flags?: NodeFlags): CatchClause {
            var node = beginNode<CatchClause>(SyntaxKind.CatchClause);
            node.name = name;
            node.block = block;
            return finishNode(node, location, flags);
        }

        export function updateCatchClause(node: CatchClause, name: Identifier, block: Block): CatchClause {
            if (node.name !== name || node.block !== block) {
                return createCatchClause(name, block, node, node.flags);
            }
            return node;
        }

        export function createPropertyAssignment(name: DeclarationName, initializer: Expression, location?: TextRange, flags?: NodeFlags): PropertyAssignment {
            var node = beginNode<PropertyAssignment>(SyntaxKind.PropertyAssignment);
            node.name = name;
            node.initializer = initializer;
            return finishNode(node, location, flags);
        }

        export function updatePropertyAssignment(node: PropertyAssignment, name: DeclarationName, initializer: Expression): PropertyAssignment {
            if (node.name !== name || node.initializer !== initializer) {
                return createPropertyAssignment(name, initializer, node, node.flags);
            }
            return node;
        }

        export function createShorthandPropertyAssignment(name: Identifier, location?: TextRange, flags?: NodeFlags): ShorthandPropertyAssignment {
            var node = beginNode<ShorthandPropertyAssignment>(SyntaxKind.ShorthandPropertyAssignment);
            node.name = name;
            return finishNode(node, location, flags);
        }
    }

    export module Visitor {
        function accept(node: Node, cbNode: Visitor, state?: any): Node {
            switch (node.kind) {
                case SyntaxKind.StringLiteral:
                case SyntaxKind.NumericLiteral:
                case SyntaxKind.RegularExpressionLiteral:
                case SyntaxKind.NoSubstitutionTemplateLiteral:
                case SyntaxKind.TemplateHead:
                case SyntaxKind.TemplateMiddle:
                case SyntaxKind.TemplateTail:
                case SyntaxKind.Identifier:
                case SyntaxKind.ThisKeyword:
                case SyntaxKind.SuperKeyword:
                case SyntaxKind.NullKeyword:
                case SyntaxKind.TrueKeyword:
                case SyntaxKind.FalseKeyword:
                    return node;
                case SyntaxKind.QualifiedName:
                    return Factory.updateQualifiedName(
                        <QualifiedName>node,
                        visit<EntityName>((<QualifiedName>node).left, cbNode, state),
                        visit<Identifier>((<QualifiedName>node).right, cbNode, state));
                case SyntaxKind.ComputedPropertyName:
                    return Factory.updateComputedPropertyName(
                        <ComputedPropertyName>node,
                        visit<Expression>((<ComputedPropertyName>node).expression, cbNode, state));
                case SyntaxKind.TypeParameter:
                    return Factory.updateTypeParameter(
                        <TypeParameterDeclaration>node,
                        visit<Identifier>((<TypeParameterDeclaration>node).name, cbNode, state),
                        visit<TypeNode>((<TypeParameterDeclaration>node).constraint, cbNode, state));
                case SyntaxKind.Parameter:
                    return Factory.updateParameterDeclaration(
                        <ParameterDeclaration>node,
                        visit<BindingPattern | Identifier>((<ParameterDeclaration>node).name, cbNode, state),
                        visit<Expression>((<ParameterDeclaration>node).initializer, cbNode, state),
                        visit<TypeNode>((<ParameterDeclaration>node).type, cbNode, state));
                case SyntaxKind.PropertySignature:
                    return Factory.updatePropertySignature(
                        <PropertyDeclaration>node,
                        visit<DeclarationName>((<PropertyDeclaration>node).name, cbNode, state),
                        visit<TypeNode>((<PropertyDeclaration>node).type, cbNode, state));
                case SyntaxKind.PropertyDeclaration:
                    return Factory.updatePropertyDeclaration(
                        <PropertyDeclaration>node,
                        visit<DeclarationName>((<PropertyDeclaration>node).name, cbNode, state),
                        visit<Expression>((<PropertyDeclaration>node).initializer, cbNode, state),
                        visit<TypeNode>((<PropertyDeclaration>node).type, cbNode, state));
                case SyntaxKind.MethodSignature:
                    return Factory.updateMethodSignature(
                        <MethodDeclaration>node,
                        visit<DeclarationName>((<MethodDeclaration>node).name, cbNode, state),
                        visitNodes<ParameterDeclaration>((<MethodDeclaration>node).parameters, cbNode, state));
                case SyntaxKind.MethodDeclaration:
                    return Factory.updateMethodDeclaration(
                        <MethodDeclaration>node,
                        visit<DeclarationName>((<MethodDeclaration>node).name, cbNode, state),
                        visitNodes<ParameterDeclaration>((<MethodDeclaration>node).parameters, cbNode, state),
                        visit<Block>((<MethodDeclaration>node).body, cbNode, state));
                case SyntaxKind.Constructor:
                    return Factory.updateConstructor(
                        <ConstructorDeclaration>node,
                        visitNodes<ParameterDeclaration>((<ConstructorDeclaration>node).parameters, cbNode, state),
                        visit<Block>((<ConstructorDeclaration>node).body, cbNode, state));
                case SyntaxKind.GetAccessor:
                    return Factory.updateGetAccessor(
                        <AccessorDeclaration>node,
                        visit<DeclarationName>((<AccessorDeclaration>node).name, cbNode, state),
                        visitNodes<ParameterDeclaration>((<AccessorDeclaration>node).parameters, cbNode, state),
                        visit<Block>((<AccessorDeclaration>node).body, cbNode, state));
                case SyntaxKind.SetAccessor:
                    return Factory.updateSetAccessor(
                        <AccessorDeclaration>node,
                        visit<DeclarationName>((<AccessorDeclaration>node).name, cbNode, state),
                        visitNodes<ParameterDeclaration>((<AccessorDeclaration>node).parameters, cbNode, state),
                        visit<Block>((<AccessorDeclaration>node).body, cbNode, state));
                case SyntaxKind.CallSignature:
                    return Factory.updateCallSignature(
                        <SignatureDeclaration>node,
                        visitNodes<ParameterDeclaration>((<SignatureDeclaration>node).parameters, cbNode, state));
                case SyntaxKind.ConstructSignature:
                    return Factory.updateConstructSignature(
                        <SignatureDeclaration>node,
                        visitNodes<ParameterDeclaration>((<SignatureDeclaration>node).parameters, cbNode, state));
                case SyntaxKind.IndexSignature:
                    return Factory.updateIndexSignature(
                        <IndexSignatureDeclaration>node,
                        visitNodes<ParameterDeclaration>((<IndexSignatureDeclaration>node).parameters, cbNode, state));
                case SyntaxKind.TypeReference:
                case SyntaxKind.FunctionType:
                case SyntaxKind.ConstructorType:
                case SyntaxKind.TypeQuery:
                case SyntaxKind.TypeLiteral:
                case SyntaxKind.ArrayType:
                case SyntaxKind.TupleType:
                case SyntaxKind.UnionType:
                case SyntaxKind.ParenthesizedType:
                    return node;
                case SyntaxKind.ObjectBindingPattern:
                    return Factory.updateObjectBindingPattern(
                        <BindingPattern>node,
                        visitNodes<BindingElement>((<BindingPattern>node).elements, cbNode, state));
                case SyntaxKind.ArrayBindingPattern:
                    return Factory.updateArrayBindingPattern(
                        <BindingPattern>node,
                        visitNodes<BindingElement>((<BindingPattern>node).elements, cbNode, state));
                case SyntaxKind.BindingElement:
                    return Factory.updateBindingElement(
                        <BindingElement>node,
                        visit<BindingPattern | Identifier>((<BindingElement>node).name, cbNode, state),
                        visit<Identifier>((<BindingElement>node).propertyName, cbNode, state),
                        visit<Expression>((<BindingElement>node).initializer, cbNode, state));
                case SyntaxKind.ArrayLiteralExpression:
                    return Factory.updateArrayLiteralExpression(
                        <ArrayLiteralExpression>node,
                        visitNodes<Expression>((<ArrayLiteralExpression>node).elements, cbNode, state));
                case SyntaxKind.ObjectLiteralExpression:
                    return Factory.updateObjectLiteralExpression(
                        <ObjectLiteralExpression>node,
                        visitNodes<ObjectLiteralElement>((<ObjectLiteralExpression>node).properties, cbNode, state));
                case SyntaxKind.PropertyAccessExpression:
                    return Factory.updatePropertyAccessExpression(
                        <PropertyAccessExpression>node,
                        visit<LeftHandSideExpression>((<PropertyAccessExpression>node).expression, cbNode, state),
                        visit<Identifier>((<PropertyAccessExpression>node).name, cbNode, state));
                case SyntaxKind.ElementAccessExpression:
                    return Factory.updateElementAccessExpression(
                        <ElementAccessExpression>node,
                        visit<LeftHandSideExpression>((<ElementAccessExpression>node).expression, cbNode, state),
                        visit<Expression>((<ElementAccessExpression>node).argumentExpression, cbNode, state));
                case SyntaxKind.CallExpression:
                    return Factory.updateCallExpression(
                        <CallExpression>node,
                        visit<LeftHandSideExpression>((<CallExpression>node).expression, cbNode, state),
                        visitNodes<Expression>((<CallExpression>node).arguments, cbNode, state));
                case SyntaxKind.NewExpression:
                    return Factory.updateNewExpression(
                        <NewExpression>node,
                        visit<LeftHandSideExpression>((<NewExpression>node).expression, cbNode, state),
                        visitNodes<Expression>((<NewExpression>node).arguments, cbNode, state));
                case SyntaxKind.TaggedTemplateExpression:
                    return Factory.updateTaggedTemplateExpression(
                        <TaggedTemplateExpression>node,
                        visit<LeftHandSideExpression>((<TaggedTemplateExpression>node).tag, cbNode, state),
                        visit<LiteralExpression | TemplateExpression>((<TaggedTemplateExpression>node).template, cbNode, state));
                case SyntaxKind.TypeAssertionExpression:
                    return Factory.updateTypeAssertion(
                        <TypeAssertion>node,
                        visit<UnaryExpression>((<TypeAssertion>node).expression, cbNode, state));
                case SyntaxKind.ParenthesizedExpression:
                    return Factory.updateParenthesizedExpression(
                        <ParenthesizedExpression>node,
                        visit<Expression>((<ParenthesizedExpression>node).expression, cbNode, state));
                case SyntaxKind.FunctionExpression:
                    return Factory.updateFunctionExpression(
                        <FunctionExpression>node,
                        visit<Identifier>((<FunctionExpression>node).name, cbNode, state),
                        visitNodes<ParameterDeclaration>((<FunctionExpression>node).parameters, cbNode, state),
                        visit<Block | Expression>((<FunctionExpression>node).body, cbNode, state));
                case SyntaxKind.ArrowFunction:
                    return Factory.updateArrowFunction(
                        <FunctionExpression>node,
                        visitNodes<ParameterDeclaration>((<FunctionExpression>node).parameters, cbNode, state),
                        visit<Block | Expression>((<FunctionExpression>node).body, cbNode, state));
                case SyntaxKind.DeleteExpression:
                    return Factory.updateDeleteExpression(
                        <DeleteExpression>node,
                        visit<UnaryExpression>((<DeleteExpression>node).expression, cbNode, state));
                case SyntaxKind.TypeOfExpression:
                    return Factory.updateTypeOfExpression(
                        <TypeOfExpression>node,
                        visit<UnaryExpression>((<TypeOfExpression>node).expression, cbNode, state));
                case SyntaxKind.VoidExpression:
                    return Factory.updateVoidExpression(
                        <VoidExpression>node,
                        visit<UnaryExpression>((<VoidExpression>node).expression, cbNode, state));
                case SyntaxKind.AwaitExpression:
                    return Factory.updateAwaitExpression(
                        <AwaitExpression>node,
                        visit<UnaryExpression>((<AwaitExpression>node).expression, cbNode, state));
                case SyntaxKind.PrefixUnaryExpression:
                    return Factory.updatePrefixUnaryExpression(
                        <PrefixUnaryExpression>node,
                        visit<UnaryExpression>((<PrefixUnaryExpression>node).operand, cbNode, state));
                case SyntaxKind.PostfixUnaryExpression:
                    return Factory.updatePostfixUnaryExpression(
                        <PostfixUnaryExpression>node,
                        visit<LeftHandSideExpression>((<PostfixUnaryExpression>node).operand, cbNode, state));
                case SyntaxKind.BinaryExpression:
                    return Factory.updateBinaryExpression(
                        <BinaryExpression>node,
                        visit<Expression>((<BinaryExpression>node).left, cbNode, state),
                        visit<Expression>((<BinaryExpression>node).right, cbNode, state));
                case SyntaxKind.ConditionalExpression:
                    return Factory.updateConditionalExpression(
                        <ConditionalExpression>node,
                        visit<Expression>((<ConditionalExpression>node).condition, cbNode, state),
                        visit<Expression>((<ConditionalExpression>node).whenTrue, cbNode, state),
                        visit<Expression>((<ConditionalExpression>node).whenFalse, cbNode, state));
                case SyntaxKind.TemplateExpression:
                    return Factory.updateTemplateExpression(
                        <TemplateExpression>node,
                        visit<LiteralExpression>((<TemplateExpression>node).head, cbNode, state),
                        visitNodes<TemplateSpan>((<TemplateExpression>node).templateSpans, cbNode, state));
                case SyntaxKind.YieldExpression:
                    return Factory.updateYieldExpression(
                        <YieldExpression>node,
                        visit<Expression>((<YieldExpression>node).expression, cbNode, state));
                case SyntaxKind.GeneratedLabel:
                    return node;
                case SyntaxKind.SpreadElementExpression:
                    return Factory.updateSpreadElementExpression(
                        <SpreadElementExpression>node,
                        visit<Expression>((<SpreadElementExpression>node).expression, cbNode, state));
                case SyntaxKind.OmittedExpression:
                    return node;
                case SyntaxKind.TemplateSpan:
                    return Factory.updateTemplateSpan(
                        <TemplateSpan>node,
                        visit<Expression>((<TemplateSpan>node).expression, cbNode, state),
                        visit<LiteralExpression>((<TemplateSpan>node).literal, cbNode, state));
                case SyntaxKind.Block:
                    return Factory.updateBlock(
                        <Block>node,
                        visitNodes<Statement>((<Block>node).statements, cbNode, state));
                case SyntaxKind.VariableStatement:
                    return Factory.updateVariableStatement(
                        <VariableStatement>node,
                        visit<VariableDeclarationList>((<VariableStatement>node).declarationList, cbNode, state));
                case SyntaxKind.EmptyStatement:
                    return node;
                case SyntaxKind.ExpressionStatement:
                    return Factory.updateExpressionStatement(
                        <ExpressionStatement>node,
                        visit<Expression>((<ExpressionStatement>node).expression, cbNode, state));
                case SyntaxKind.IfStatement:
                    return Factory.updateIfStatement(
                        <IfStatement>node,
                        visit<Expression>((<IfStatement>node).expression, cbNode, state),
                        visit<Statement>((<IfStatement>node).thenStatement, cbNode, state),
                        visit<Statement>((<IfStatement>node).elseStatement, cbNode, state));
                case SyntaxKind.DoStatement:
                    return Factory.updateDoStatement(
                        <DoStatement>node,
                        visit<Statement>((<DoStatement>node).statement, cbNode, state),
                        visit<Expression>((<DoStatement>node).expression, cbNode, state));
                case SyntaxKind.WhileStatement:
                    return Factory.updateWhileStatement(
                        <WhileStatement>node,
                        visit<Expression>((<WhileStatement>node).expression, cbNode, state),
                        visit<Statement>((<WhileStatement>node).statement, cbNode, state));
                case SyntaxKind.ForStatement:
                    return Factory.updateForStatement(
                        <ForStatement>node,
                        visit<Expression | VariableDeclarationList>((<ForStatement>node).initializer, cbNode, state),
                        visit<Expression>((<ForStatement>node).condition, cbNode, state),
                        visit<Expression>((<ForStatement>node).iterator, cbNode, state),
                        visit<Statement>((<ForStatement>node).statement, cbNode, state));
                case SyntaxKind.ForInStatement:
                    return Factory.updateForInStatement(
                        <ForInStatement>node,
                        visit<Expression | VariableDeclarationList>((<ForInStatement>node).initializer, cbNode, state),
                        visit<Expression>((<ForInStatement>node).expression, cbNode, state),
                        visit<Statement>((<ForInStatement>node).statement, cbNode, state));
                case SyntaxKind.ContinueStatement:
                case SyntaxKind.BreakStatement:
                    return node;
                case SyntaxKind.ReturnStatement:
                    return Factory.updateReturnStatement(
                        <ReturnStatement>node,
                        visit<Expression>((<ReturnStatement>node).expression, cbNode, state));
                case SyntaxKind.WithStatement:
                    return Factory.updateWithStatement(
                        <WithStatement>node,
                        visit<Expression>((<WithStatement>node).expression, cbNode, state),
                        visit<Statement>((<WithStatement>node).statement, cbNode, state));
                case SyntaxKind.SwitchStatement:
                    return Factory.updateSwitchStatement(
                        <SwitchStatement>node,
                        visit<Expression>((<SwitchStatement>node).expression, cbNode, state),
                        visitNodes<CaseOrDefaultClause>((<SwitchStatement>node).clauses, cbNode, state));
                case SyntaxKind.LabeledStatement:
                    return Factory.updateLabeledStatement(
                        <LabeledStatement>node,
                        visit<Identifier>((<LabeledStatement>node).label, cbNode, state),
                        visit<Statement>((<LabeledStatement>node).statement, cbNode, state));
                case SyntaxKind.ThrowStatement:
                    return Factory.updateThrowStatement(
                        <ThrowStatement>node,
                        visit<Expression>((<ThrowStatement>node).expression, cbNode, state));
                case SyntaxKind.TryStatement:
                    return Factory.updateTryStatement(
                        <TryStatement>node,
                        visit<Block>((<TryStatement>node).tryBlock, cbNode, state),
                        visit<CatchClause>((<TryStatement>node).catchClause, cbNode, state),
                        visit<Block>((<TryStatement>node).finallyBlock, cbNode, state));
                case SyntaxKind.DebuggerStatement:
                    return node;
                case SyntaxKind.VariableDeclaration:
                    return Factory.updateVariableDeclaration(
                        <VariableDeclaration>node,
                        visit<BindingPattern | Identifier>((<VariableDeclaration>node).name, cbNode, state),
                        visit<Expression>((<VariableDeclaration>node).initializer, cbNode, state));
                case SyntaxKind.VariableDeclarationList:
                    return Factory.updateVariableDeclarationList(
                        <VariableDeclarationList>node,
                        visitNodes<VariableDeclaration>((<VariableDeclarationList>node).declarations, cbNode, state));
                case SyntaxKind.FunctionDeclaration:
                    return Factory.updateFunctionDeclaration(
                        <FunctionDeclaration>node,
                        visit<Identifier>((<FunctionDeclaration>node).name, cbNode, state),
                        visitNodes<ParameterDeclaration>((<FunctionDeclaration>node).parameters, cbNode, state),
                        visit<Block>((<FunctionDeclaration>node).body, cbNode, state));
                case SyntaxKind.CaseClause:
                    return Factory.updateCaseClause(
                        <CaseClause>node,
                        visit<Expression>((<CaseClause>node).expression, cbNode, state),
                        visitNodes<Statement>((<CaseClause>node).statements, cbNode, state));
                case SyntaxKind.DefaultClause:
                    return Factory.updateDefaultClause(
                        <DefaultClause>node,
                        visitNodes<Statement>((<DefaultClause>node).statements, cbNode, state));
                case SyntaxKind.CatchClause:
                    return Factory.updateCatchClause(
                        <CatchClause>node,
                        visit<Identifier>((<CatchClause>node).name, cbNode, state),
                        visit<Block>((<CatchClause>node).block, cbNode, state));
                case SyntaxKind.PropertyAssignment:
                    return Factory.updatePropertyAssignment(
                        <PropertyAssignment>node,
                        visit<DeclarationName>((<PropertyAssignment>node).name, cbNode, state),
                        visit<Expression>((<PropertyAssignment>node).initializer, cbNode, state));
                case SyntaxKind.ShorthandPropertyAssignment:
                    return node;
            }
        }

        export function fallback<TNode extends Node>(node: TNode, cbNode: Visitor, state?: any): TNode {
            if (!cbNode || !node) {
                return node;
            }
            return <TNode>accept(node, cbNode, state);
        }
    }
}
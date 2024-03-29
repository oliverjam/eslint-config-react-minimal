// react/jsx-no-comment-textnodes
<div>// this is not a comment</div>;

// react/jsx-no-duplicate-props
<div id="test" id="other" />;

// react/jsx-no-target-blank
<a href="https://example.com" target="_blank">
  test
</a>;

// react/jsx-no-undef
<NotDefined />;

// react/no-danger-with-children
<p dangerouslySetInnerHTML={{ __html: "test" }}>this won't be used</p>;

// react/style-prop-object
<p style="color: red">test</p>;

// react-hooks/rules-of-hooks
function UsesHooksWrong() {
  if (true) {
    useEffect(() => {});
  }
}

// react-hooks/exhaustive-deps
function EffectMissingDeps({ name }) {
  useEffect(() => {
    console.log(name);
  }, []);
}

// react/no-deprecated
React.render();

// react/no-unescaped-entities
<div>" hello</div>;

// react/no-unknown-property
<div class="test" />;

// react/self-closing-comp
<p></p>;

// react/void-dom-elements-no-children
<img>test</img>;

// react/jsx-curly-brace-presence
<p id={"test"} />;

// react/jsx-key
[1, 2, 3].map(num => <p>{num}</p>);

// react/jsx-no-useless-fragment
<>
  <p>test</p>
</>;

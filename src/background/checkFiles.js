const checkFiles = () => {
  const files = [
    ...document.querySelector('.js-diff-progressive-container').children,
  ];

  files.forEach((file) => {
    const filename = file.querySelector('.file-info .link-gray-dark').innerText;

    // Example pattern matching, will replace with config
    if (/^.+\.snap$/.test(filename)) {
      const reviewedToggleElement = file.querySelector(
        '.js-reviewed-toggle input'
      );
      if (!reviewedToggleElement.checked) {
        console.log(`Marking ${filename} as reviewed`);
        reviewedToggleElement.click();
      }
    }
  });
};

export default checkFiles;

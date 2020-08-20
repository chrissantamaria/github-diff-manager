// example valid string: /chrissantamaria/github-diff-manager/pull/1/files
const pathRegex = /^\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/pull\/\d+\/files$/;

if (pathRegex.test(window.location.pathname)) {
  const files = [
    ...document.querySelector('.js-diff-progressive-container').children,
  ];

  files.forEach((file) => {
    const filename = file.querySelector('.file-info .link-gray-dark').innerText;

    // Example pattern matching, will replace with config
    if (filename.endsWith('.yml')) {
      const reviewedToggleElement = file.querySelector(
        '.js-reviewed-toggle input'
      );
      if (!reviewedToggleElement.checked) {
        console.log(`Marking ${filename} as reviewed`);
        reviewedToggleElement.click();
      }
    }
  });
}

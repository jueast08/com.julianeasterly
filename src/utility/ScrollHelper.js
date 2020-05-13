export default function scrollToId(idName, callback) {
  scrollToQuerySelector("#" + idName, callback);
}

export function scrollToQuerySelector(querySelector, callback) {
  let target = document.querySelector(querySelector);
  target = typeof target === Array ? target[0] : target;
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    if (typeof callback === Function) {
      callback();
    }
  } else {
    console.warn(
      "No elements found with the following Query selector" + querySelector
    );
  }
}

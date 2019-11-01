import './src/styles/global.css';	

exports.shouldUpdateScroll = ({
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {

  if (location.hash) {
    return false;
  }

  return true;
};

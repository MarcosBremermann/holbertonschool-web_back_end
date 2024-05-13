// Export a function named loadBalancer. It should accept two arguments chinaDownload
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

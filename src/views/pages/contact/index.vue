<template>
  <div class="branches-page">
    <div class="webpage-viewer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="iframe-wrapper no-margin">
              <div class="loading-wrapper">
                <div class="loading-content">
                  <div class="loading">
                    <p>loading</p>
                    <span></span>
                  </div>
                </div>
              </div>
              <iframe
                width="100%"
                height="100%"
                src="https://helpdesk.nicasiabank.com/support/home"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Branches",
};
</script>
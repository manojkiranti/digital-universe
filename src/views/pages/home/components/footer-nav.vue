<template>
  <div class="bottom-nav">
    <div class="container">
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">
            <span>
               <font-awesome-icon
                            :icon="['fal', 'home']"
                            class="nav-icon"
                            
                        />
              <span class="nav-text">Home</span>
            </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/offers">
            <span>
              <font-awesome-icon
                            :icon="['fal', 'badge-percent']"
                            class="nav-icon"
                            
                        />
              <span class="nav-text">Offers</span>
            </span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/branches">
            <span>
              <font-awesome-icon
                            :icon="['fal', 'university']"
                            class="nav-icon"
                            
                        />
              <span class="nav-text">Branches</span>
            </span>
            </router-link>
          
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/support">
            <span>
              <font-awesome-icon
                            :icon="['fal', 'cog']"
                            class="nav-icon"
                            
                        />
              <span class="nav-text">Support</span>
            </span>
          </router-link>
        </li>

        
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'FooterNav'
}
</script>
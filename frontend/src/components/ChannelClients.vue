<template>
<div>
  <v-menu offset-x>
    <template slot="activator">
      <v-btn flat>
        <v-icon>{{ statusIcon }}</v-icon>
        {{ client.client_nickname }} <i v-if="client.clid === queryUser.client_id">(You)</i>
      </v-btn>
    </template>
    <v-list>
      <v-list-tile @click="openPrivateChat(client.clid)">
        <v-list-tile-action>
          <v-icon>send</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Open Text Chat
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'client-edit', params: {clid: client.clid}}">
        <v-list-tile-action>
          <v-icon>edit</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Edit Client
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="openKickDialog(4)">
        <v-list-tile-action>
          <v-icon>forward</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Kick Client from Channel
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="openKickDialog(5)">
        <v-list-tile-action>
          <v-icon>forward</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Kick Client from Server
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'client-ban', params: {cldbid: client.client_database_id}}">
        <v-list-tile-action>
          <v-icon>not_interested</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Ban Client
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>

  <v-dialog v-model="kickClientDialog" max-width="500px">
    <v-card>
      <v-card-title>Kick from {{ destination }}</v-card-title>
      <v-card-text>
        <v-text-field label="Kick Message" v-model="reason"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="kickClientDialog = false" color="primary">Cancel</v-btn>
        <v-btn flat @click="kick" color="primary">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  props: {
    client: Object,
    queryUser: Object
  },
  data() {
    return {
      kickClientDialog: false,
      reason: '',
      destination: '',
      reasonid: null,
    }
  },
  computed: {
    statusIcon() {
      if (this.client.client_away === 1) {
        return 'cancel_presentation'
      } else if (this.client.client_output_muted === 1) {
        return 'volume_off'
      } else if (this.client.client_input_muted === 1) {
        return 'mic_off'
      } else {
        return 'fiber_manual_record'
      }
    }
  },
  methods: {
    openKickDialog(reasonid) {
      // reasonid :
      // 4 = kick form current channel into default channel
      // 5 = kick from server
      this.reasonid = reasonid

      switch (this.reasonid) {
        case 4:
          this.destination = 'Channel'
          break;
        case 5:
          this.destination = 'Server'
      }

      this.kickClientDialog = true
    },
    async kick() {
      try {
        await this.$TeamSpeak.execute('clientkick', {
          reasonid: this.reasonid,
          reasonmsg: this.reason,
          clid: this.client.clid
        })
      } catch (err) {
        this.$toast.error(err.message)
      }

      this.kickClientDialog = false
    },
    openPrivateChat(clid) {
      this.$router.push({name: 'chat', query: {client: clid}})
    }
  }
}
</script>

<style scoped>
* {
  text-transform: none !important;
}
</style>

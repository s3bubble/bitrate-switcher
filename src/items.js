import videojs from 'video.js';

const MenuItem = videojs.getComponent('MenuItem');

export class PlayBackRatesBtn extends MenuItem {
  constructor(player, options) {
    super(player, options);
    this.player = player;
    this.label = options.label;
    this.levels = options.levels;
    this.bitrate = options.bitrate;
    this.setAttribute('data-bitrate', this.bitrate);

  }
  handleClick(event) {
    // Add the selected class
    this.parentComponent_.children_.forEach(child => {
      child.removeClass('vjs-selected');
    });

    this.addClass('vjs-selected');

    if (this.levels === undefined) {
      this.player.trigger('dashQualityLevelsSelectAuto');
      return;
    }

    if (this.player.getChild('streamInfo')) {
      this.player.getChild('streamInfo').updateTextContent(`<div class="vjs-stream-info-box">Playback:${this.label}<br/>Type:${this.player.currentType()}</div>`);
    }

    if (this.levels.qualityIndex !== undefined) {
      this.player.dashQualityLevelsSelected = this.levels.qualityIndex;
      this.player.trigger('dashQualityLevelsSelected');
    }

    if (this.levels.length > 0) {
      this.levels.forEach(level => {
        if (this.bitrate === level.bitrate) {
          level.enabled = true;
        } else {
          level.enabled = false;
        }
      });
    }
  }
}

videojs.registerComponent('PlayBackRatesBtn', PlayBackRatesBtn);

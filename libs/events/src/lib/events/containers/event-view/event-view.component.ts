import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventFacade } from '../../../events-core/+state/event.facade';

@Component({
  selector: 'medium-stories-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventViewComponent implements OnInit {
  constructor(public eventFacade: EventFacade, private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventFacade.loadEvent({ id: +this.route.snapshot.paramMap.get('id') });
  }
}

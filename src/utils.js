export class Utils{
    constructor(){
        this.changesDetected = {};
        this.is_changeing = false;
    }
    isFirstOrLastChange(){
        let empty = true;

        for(let key in this.changesDetected) {
            empty = false;
            break;
        }

        if(!this.is_changeing&&!empty){
            this.scene.emit('ui-changing');
            this.is_changeing = true;
        }else if(this.is_changeing&&empty){
            if(this.is_changeing){
                this.scene.emit('ui-changing-stopped');
                this.is_changeing = false;
            }
        }
    }
    preventDefault(e){
        if(e.detail && e.detail.preventDefault && typeof e.detail.preventDefault === "function"){
            e.detail.preventDefault();
        }
    }
    shorten(string,length){
        return string.length>length?string.substr(0,length)+"...":string;
    }
    isChanging(scene,ref){
        //let index = this.changesDetected[ref];
        //if(!index){
            this.scene = this.scene||scene;
            let now = new Date().getTime();
            this.changesDetected[ref] = {t:now};
            this.isFirstOrLastChange();
            for(let key in this.changesDetected){
                let change = this.changesDetected[key];
                if(change.t&&now-change.t>1000){
                    this.stoppedChanging(ref);
                }
            }
       // }
    }
    stoppedChanging(ref){
        delete this.changesDetected[ref];
        this.isFirstOrLastChange();
    }
}
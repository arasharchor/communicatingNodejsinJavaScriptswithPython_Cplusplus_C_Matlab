<script type="text/Javascript">
    function handle_output(out_type, out){
        console.log(out_type);
        console.log(out);
        var res = null;
         // if output is a print statement
        if(out_type == "stream"){
            res = out.data;
        }
        // if output is a python object
        else if(out_type === "pyout"){
            res = out.data["text/plain"];
        }
        // if output is a python error
        else if(out_type == "pyerr"){
            res = out.ename + ": " + out.evalue;
        }
        // if output is something we haven't thought of
        else{
            res = "[out type not implemented]";   
        }
        document.getElementById("result_output").value = res;
    }
    
    function exec_code(){
        var code_input = document.getElementById('code_input').value;
        var kernel = IPython.notebook.kernel;
        var callbacks = {'output' : handle_output};
        document.getElementById("result_output").value = "";  // clear output box
        var msg_id = kernel.execute(code_input, callbacks, {silent:false});
        console.log("button pressed");
    }
</script>

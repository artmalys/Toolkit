function clubsub_toggle(id){
        var tab = document.getElementById(id);
        var bExpand = tab.style.display == 'none';
        if(bExpand == true){
                tab.style.display = "";
        }
}

function clubsub_toggle_hide(id){
        var tab = document.getElementById(id);
        var bExpand = tab.style.display == '';
        if(bExpand == true){
                tab.style.display = "none";
        }
}

function pasteExample()
{
  $('sequence_input').value = ">gi|190149322|ref|YP_001967847.1| GTP-binding protein [Actinobacillus pleuropneumoniae serovar 7 str. AP76]\nMNCDLDHIRSRVKGRFPSIKISTVCINAPYIQLNKDISMQNLDINKLRNIAIIAHVDHGKTTLVDKLLQQ\nSGTLGETRGDADERVMDSNDLEKERGITILAKNTAINWNDYRINIVDTPGHADFGGEVERVLSMVDSVLL\nVVDAFDGPMPQTRFVTQKAFAHGLKPIVVINKVDRPGARPDWVVDQVFDLFVNLGATDEQLDFPIIYASA\nLMGVAGLEHEDLAEDMTPLFQAIVDHVEPPKVELNAPFQMQISQLDYNNYVGVIGIGRIKRGSIKPNQTV\nTVIDSEGKTRNGKIGQVLGHLGLQRYEASEAFAGDIIAITGLGELNISDTICDINNVEALPALSVDEPTV\nSMFFCVNTSPFCGQEGKYVTSRQILERLNKELVHNVALRVEETPNPDEFRVSGRGELHLSVLIENMRREG\nYELAVSRPKVIYREENGKKQEPFEQVTIDIEEQHQGAVMEALGIRKGEVKDMIPDGKGRTRLEYVIPSRG\nLIGFRNEFMTMTSGTGLLYSSFSHYDDVKPGEIGQRKNGVLISNATGKALAYALFGLQERGKLMIDHGVD\nVYEGQIIGIHSRGNDLTVNCLQGKKLTNMRASGKDDAIVLTTPVKMTLEQALEFIDDDELVEVTPQSIRV\nRKRLLTENDRKRAGRTTTSTSTK"}